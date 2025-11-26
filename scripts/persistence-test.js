const STORAGE_SPACE_ACTIVITIES_KEY = 'habitu-space-activities';
const storage = {};

function safeStorageGet(key) {
  if (key in storage) {
    return storage[key];
  }
  return null;
}

function safeStorageSet(key, value) {
  storage[key] = value;
}

function readSpaceActivitiesFromStorage() {
  try {
    const raw = safeStorageGet(STORAGE_SPACE_ACTIVITIES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const normalized = {};
    Object.keys(parsed).forEach(spaceId => {
      const value = parsed[spaceId];
      if (Array.isArray(value)) {
        normalized[spaceId] = value;
      }
    });
    return normalized;
  } catch (err) {
    console.warn('readSpaceActivitiesFromStorage', err);
    return {};
  }
}

function persistSpaceActivitiesToStorage() {
  try {
    safeStorageSet(STORAGE_SPACE_ACTIVITIES_KEY, JSON.stringify(SPACE_ACTIVITIES));
  } catch (err) {
    console.warn('persistSpaceActivitiesToStorage', err);
  }
}

function timestampToDate(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  return new Date(value);
}

function dayKeyFromDate(date) {
  if (!date) return '';
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return `${copy.getFullYear()}-${copy.getMonth()}-${copy.getDate()}`;
}

function displayNameFromEmail(email) {
  if (!email) return '';
  const candidate = String(email || '').trim();
  if (!candidate) return '';
  if (candidate.includes('@')) {
    return candidate.split('@')[0];
  }
  return candidate;
}

function getOwnerNameFromEvent(event) {
  if (!event) return '';
  return event.owner || event.actorName || event.ownerName || displayNameFromEmail(event.userEmail) || 'Moi';
}

function upsertLocalHabitActivity(event) {
  if (!event || !event.spaceId || !event.habitId) return;
  const owner = event.owner || getOwnerNameFromEvent(event);
  if (!owner) return;
  const recordedAt = timestampToDate(event.recordedAt) || new Date();
  const dayKey = event.activityDate || dayKeyFromDate(recordedAt);
  const key = `${owner}:${event.habitId}:${dayKey}`;
  const bucket = SPACE_ACTIVITIES[event.spaceId] || [];
  const idx = bucket.findIndex(ev => {
    const existingOwner = ev.owner || getOwnerNameFromEvent(ev);
    if (!existingOwner) return false;
    const existingDayKey = ev.activityDate || dayKeyFromDate(timestampToDate(ev.recordedAt) || new Date(0));
    return `${existingOwner}:${ev.habitId}:${existingDayKey}` === key;
  });
  const stored = { ...event, recordedAt };
  if (idx === -1) {
    bucket.push(stored);
  } else {
    const prev = timestampToDate(bucket[idx].recordedAt) || new Date(0);
    if (recordedAt >= prev) {
      bucket[idx] = stored;
    }
  }
  SPACE_ACTIVITIES[event.spaceId] = bucket;
  persistSpaceActivitiesToStorage();
}

let SPACE_ACTIVITIES = readSpaceActivitiesFromStorage();

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function runTest() {
  const spaceId = 'garden-test';
  const habitId = 'habit-test';
  const owner = 'Test Gardener';
  const firstRecordedAt = new Date('2024-01-01T09:00:00Z');
  const firstEvent = {
    spaceId,
    habitId,
    owner,
    recordedAt: firstRecordedAt,
    type: 'realization'
  };

  upsertLocalHabitActivity(firstEvent);
  const bucket = SPACE_ACTIVITIES[spaceId];
  assert(bucket && bucket.length === 1, 'Should persist one record after first upsert');

  const storedPayload = JSON.parse(safeStorageGet(STORAGE_SPACE_ACTIVITIES_KEY));
  const storedEvent = storedPayload[spaceId][0];
  assert(storedEvent.owner === owner, 'Owner should survive persistence');
  assert(storedEvent.habitId === habitId, 'Habit ID should survive persistence');

  SPACE_ACTIVITIES = readSpaceActivitiesFromStorage();
  const reloadedEvent = SPACE_ACTIVITIES[spaceId][0];
  assert(reloadedEvent.owner === owner, 'Owner should survive reload');
  assert(new Date(reloadedEvent.recordedAt).getTime() === firstRecordedAt.getTime(), 'Timestamp should stay identical after reload');

  const secondRecordedAt = new Date(firstRecordedAt.getTime() + 5000);
  const secondEvent = {
    spaceId,
    habitId,
    owner,
    recordedAt: secondRecordedAt,
    type: 'realization'
  };
  upsertLocalHabitActivity(secondEvent);
  const latestEvent = SPACE_ACTIVITIES[spaceId][0];
  assert(new Date(latestEvent.recordedAt).getTime() === secondRecordedAt.getTime(), 'More recent record should replace previous same-day entry');

  const storedAfter = JSON.parse(safeStorageGet(STORAGE_SPACE_ACTIVITIES_KEY))[spaceId][0];
  assert(new Date(storedAfter.recordedAt).getTime() === secondRecordedAt.getTime(), 'LocalStorage should match latest record');

  console.log('✅ persistence test passed');
}

try {
  runTest();
} catch (err) {
  console.error('❌ persistence test failed:', err.message || err);
  process.exitCode = 1;
}
