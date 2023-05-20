const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should render a circle with the specified color", () => {
      const circle = new Circle();
      const expectedHtml = '<circle cx="150" cy="110" r="80" fill="blue" />';
      circle.setColor("blue");
      expect(circle.render()).toEqual(expectedHtml);
    });
  });

  describe("Triangle", () => {
    it("should render a triangle with the specified color", () => {
      const triangle = new Triangle();
      const expectedHtml =
        '<polygon points="150,20 250,150 50,150" fill="red" />';
      triangle.setColor("red");
      expect(triangle.render()).toEqual(expectedHtml);
    });
  });

  describe("Square", () => {
    it("should render a square with the specified color", () => {
      const square = new Square();
      const expectedHtml =
        '<rect x="75" y="40" width="150" height="150" fill="green" />';
      square.setColor("green");
      expect(square.render()).toEqual(expectedHtml);
    });
  });
});
