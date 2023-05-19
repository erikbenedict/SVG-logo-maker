const { Circle, Triangle, Square } = require("./shapes");

class Svg {
  constructor() {
    this.shape = "";
    this.text = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
  setShape(chosenShape) {
    this.shape = chosenShape.render();
  }
  setText(chosenText, chosenColor) {
    this.text = ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`;
  }
}

module.exports = Svg;
