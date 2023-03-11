require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===================".green);
    console.log("     TODO MENU".green);
    console.log("===================".green);

    console.log(`${"1".green}. Create task`);
    console.log(`${"2".green}. List tasks`);
    console.log(`${"3".green}. List finished tasks`);
    console.log(`${"4".green}. List pending tasks`);
    console.log(`${"5".green}. Finish task(s)`);
    console.log(`${"6".green}. Delete task`);
    console.log(`${"0".green}. Exit`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`\nSelect any option:`, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const stop = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`\nPress ${"ENTER".green} to continue:\n`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = { showMenu, stop };
