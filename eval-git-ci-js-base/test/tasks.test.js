const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask creates a task with correct properties', () => {
  const task = addTask('  Learn Jest  ');
  expect(task).toEqual({
    id: expect.any(Number), 
    name: 'Learn Jest',
    done: false
  });
})


