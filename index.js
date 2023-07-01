import inquirer from 'inquirer';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import fs from 'fs';

const window = createSVGWindow();
const document = window.document;

registerWindow(window, document);

// TODO: Create a function to initialize app
function init() {
  // TODO: Create an array of questions for user input
  const questions = [
    {
      type: 'input',
      name: 'companyName',
      message: 'Enter the company name:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text, enter a keyword or a hexadecimal number:',
    },
    {
      type: 'input',
      name: 'shape',
      message: 'What shape would you like? (circle, triangle, and square)',
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape, enter a keyword or a hexadecimal number:',
    }
  ];

  // Prompt the user for information
  inquirer.prompt(questions).then((answers) => {
    const draw = SVG(document.documentElement).size(300, 200);
  
    const text = draw.text(answers.companyName).font({ fill: answers.textColor, size: 40 }).move(10, 100);
  
    let shape;
    if (answers.shape === 'circle') {
      shape = draw.circle(100).fill(answers.shapeColor).move(150, 50);
    } else if (answers.shape === 'triangle') {
      shape = draw.polygon('50,0 100,100 0,100').fill(answers.shapeColor).move(150, 50);
    } else if (answers.shape === 'square') {
      shape = draw.rect(100, 100).fill(answers.shapeColor).move(150, 50);
    }
  
    const svgMarkup = draw.svg();
    fs.writeFileSync('logo.svg', svgMarkup);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();
