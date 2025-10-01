const {toggleTask} = require('../lib/toggleTask');

test('toggleTask inverse done', () => {
  const task = { done: false };

  toggleTask(task);
  expect(task.done).toBe(true);

  toggleTask(task);
  expect(task.done).toBe(false);
});