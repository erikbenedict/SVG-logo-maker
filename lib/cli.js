const Svg = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { join } = require("path");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "chosenText",
          message: "Enter up to three characters",
        },
        {
          type: "input",
          name: "textColor",
          message:
            "Enter a color keyword (OR a hexadecimal number) for the text color",
          validate: function (input) {
            if (input.length > 3) {
              return "Please enter up to three characters.";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "chosenShape",
          message: "Choose a shape",
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message:
            "Enter a color keyword (OR a hexadecimal number) for the shape's color",
        },
      ])
      .then((answers) => {
        const { chosenText, textColor, chosenShape, shapeColor } = answers;
        const svg = new Svg();

        let shape;
        if (chosenShape === "Circle") {
          shape = new Circle();
        } else if (chosenShape === "Triangle") {
          shape = new Triangle();
        } else if (chosenShape === "Square") {
          shape = new Square();
        }

        shape.setColor(shapeColor);
        svg.setShape(shape);
        svg.setText(chosenText, textColor);

        const svgContent = svg.render();

        return writeFile(
          join(__dirname, "..", "examples", "logo.svg"),
          svgContent
        );
      })
      .then(() => console.log("Generated logo.svg"))
      .catch((err) => {
        console.log(err);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CLI;
