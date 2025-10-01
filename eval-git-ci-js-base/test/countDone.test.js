test('countDone compte les tâches terminées', () => {
  const tasks = [
    { done: false },
    { done: true },
    { done: true }
  ];

  expect(countDone(tasks)).toBe(2);
});
