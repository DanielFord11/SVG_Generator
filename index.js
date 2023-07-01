import inquirer from 'inquirer';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import fs from 'fs';


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
    //Draw logo function here
  })
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();