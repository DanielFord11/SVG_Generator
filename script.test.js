import { SVG } from '@svgdotjs/svg.js';
import { Circle, Triangle, Square } from './index.js'; 

describe('Shape subclasses', () => {
  test('Circle creates a valid SVG circle', () => {
    const draw = SVG(document.createElement('svg'));
    const circle = new Circle(draw, 'red');
    circle.createShape();

    const svgElement = draw.node.querySelector('circle');
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute('cx')).toEqual('150');
    expect(svgElement.getAttribute('cy')).toEqual('50');
    expect(svgElement.getAttribute('r')).toEqual('100');
    expect(svgElement.getAttribute('fill')).toEqual('red');
  });

  test('Triangle creates a valid SVG polygon', () => {
    const draw = SVG(document.createElement('svg'));
    const triangle = new Triangle(draw, 'blue');
    triangle.createShape();

    const svgElement = draw.node.querySelector('polygon');
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute('points')).toEqual('50,0 100,100 0,100');
    expect(svgElement.getAttribute('fill')).toEqual('blue');
  });

  test('Square creates a valid SVG rectangle', () => {
    const draw = SVG(document.createElement('svg'));
    const square = new Square(draw, 'green');
    square.createShape();

    const svgElement = draw.node.querySelector('rect');
    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute('x')).toEqual('150');
    expect(svgElement.getAttribute('y')).toEqual('50');
    expect(svgElement.getAttribute('width')).toEqual('100');
    expect(svgElement.getAttribute('height')).toEqual('100');
    expect(svgElement.getAttribute('fill')).toEqual('green');
  });
});
