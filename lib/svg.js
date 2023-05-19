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
  setText(chosenText, textColor) {
    this.text = ` <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${chosenText}</text>`;
  }
}

module.exports = Svg;
