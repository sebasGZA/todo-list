const Task = require("./task");

class Tasks {
  _list = {};

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key]);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  createTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  listAllTasks() {
    this.listArr.forEach((task, index) => {
      const idx = `${index + 1}`.green;
      const { description, isCompleted } = task;
      const state = isCompleted ? "Finished".green : "Pending".red;

      console.log(`${idx}. ${description} :: ${state}`);
    });
  }

  listTypeTasks(finished = true) {
    let count = 0;
    this.listArr.forEach((task) => {
      const { description, isCompleted } = task;
      const state = isCompleted ? isCompleted : "Pending".red;

      if (isCompleted) {
        if (finished) {
          count++;
          console.log(`${(count + ".").green} ${description} :: ${state}`);
        }
      } else {
        if (!finished) {
          count++;
          console.log(`${(count + ".").green} ${description} :: ${state}`);
        }
      }
    });
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  toggleToFinished(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.isCompleted) {
        task.isCompleted = new Date().toISOString();
      }
    });

    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].isCompleted = null;
      }
    });
  }
}

module.exports = Tasks;
