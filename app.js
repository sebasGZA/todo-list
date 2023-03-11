const {
  inquirerMenu,
  stop,
  readInput,
  tasksToDelete,
  confirm,
  tasksToFinish,
} = require("./helpers/inquirer");
const { saveFile, readFile } = require("./helpers/file");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const tasksDb = readFile();

  if (tasksDb) {
    tasks.createTasksFromArray(tasksDb);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //Create
        const desc = await readInput("Description: ");
        tasks.createTask(desc);
        break;
      case "2":
        //list
        tasks.listAllTasks();
        break;
      case "3":
        //List finished tasks
        tasks.listTypeTasks(true);
        break;
      case "4":
        //List pending tasks
        tasks.listTypeTasks(false);
        break;
      case "5":
        //Finisk task(s)
        const ids = await tasksToFinish(tasks.listArr);
        tasks.toggleToFinished(ids);
        break;
      case "6":
        //Delete task
        const id = await tasksToDelete(tasks.listArr);
        if (id !== "0") {
          const ok = await confirm("Are you sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task deleted");
          }
        }

        break;
    }

    saveFile(tasks.listArr);
    if (opt !== "0") await stop();
  } while (opt !== "0");
};

main();
