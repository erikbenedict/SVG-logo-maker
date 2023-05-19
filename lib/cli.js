const Svg = require("./svg");
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

class CLI {
  constructor() {}
  run() {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters",
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Enter a color keyword (OR a hexadecimal number) for the text color",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Enter a color keyword (OR a hexadecimal number) for the shape's color",
      },
    ]);
  }
}

module.exports = CLI;
