const { v4: uuidv4 } = require("uuid");
class Task {
  id = "";
  description = "";
  isCompleted = null;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.isCompleted = null;
  }
}

module.exports = Task;
