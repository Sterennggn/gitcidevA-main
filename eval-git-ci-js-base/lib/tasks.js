// Simple in-memory task list
let tasks = [];
let nextId = 1;

function getTasks() {
  return tasks;
}

function reset() {
  tasks = [];
  nextId = 1;
}

function addTask(name) {
  return {
    id: Date.now(), 
    name: name.trim(),
    done: false
  };
}

module.exports = {getTasks, reset, addTask};
