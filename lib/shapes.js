class Shape {
  constructor() {
    this.color = "";
  }
  setColor(chosenColor) {
    this.color = chosenColor;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return <polygon points="150,20 230,180 70,180" fill="${this.color}" />;
  }
}

class Square extends Shape {
  render() {
    return <rect x="110" y="60" width="80" height="80" fill="${this.color}" />;
  }
}

module.exports = { Circle, Triangle, Square };
