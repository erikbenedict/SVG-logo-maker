class Shape {
  constructor() {
    this.color = "";
  }
  setColor(chosenColor) {
    this.color = chosenColor;
  }
}

class Circle extends Shape {
  render() {}
}

class Triangle extends Shape {
  render() {}
}

class Square extends Shape {
  render() {}
}

module.exports = { Circle, Triangle, Square };
