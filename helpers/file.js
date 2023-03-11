const fs = require("fs");
const file = "./data/data.json";

const saveFile = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readFile = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const info = fs.readFileSync(file, {
    encoding: "utf-8",
  });

  return JSON.parse(info);
};

module.exports = {
  saveFile,
  readFile,
};
