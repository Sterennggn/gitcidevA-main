function countDone(tasks) {
  return tasks.filter(t => t.done).length;
}

module.exports = {countDone};