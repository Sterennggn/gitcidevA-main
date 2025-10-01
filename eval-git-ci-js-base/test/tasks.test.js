const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

function addTask(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new Error("name is required");
  }
  const task = {
    id: nextId++,
    name: trimmed,
    done: false
  };
}


