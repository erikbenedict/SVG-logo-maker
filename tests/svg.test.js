const Svg = require("../lib/svg");
const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Svg", () => {
  let svg;

  beforeEach(() => {
    svg = new Svg();
  });

  describe("setShape", () => {
    it("should set the shape correctly", () => {
      const circle = new Circle();
      circle.setColor("blue");
      svg.setShape(circle);
      expect(svg.shape).toEqual(
        '<circle cx="150" cy="110" r="80" fill="blue" />'
      );
    });
  });

  describe("setText", () => {
    it("should set the text correctly", () => {
      svg.setText("Hello", "red");
      expect(svg.text).toEqual(
        ' <text x="150" y="125" font-size="50" text-anchor="middle" fill="red">Hello</text>'
      );
    });
  });

  describe("render", () => {
    it("should render the SVG correctly", () => {
      const circle = new Circle();
      circle.setColor("blue");
      svg.setShape(circle);
      svg.setText("Hello", "red");

      const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circle.render()} <text x="150" y="125" font-size="50" text-anchor="middle" fill="red">Hello</text></svg>`;
      expect(svg.render()).toEqual(expectedSvg);
    });
  });
});
