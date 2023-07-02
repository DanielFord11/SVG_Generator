import inquirer from 'inquirer';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import fs from 'fs';

const window = createSVGWindow();
const document = window.document;

registerWindow(window, document);

test('init function should generate SVG logo file', async () => {
  // Mock the user input
  const answers = {
    companyName: 'Test Company',
    textColor: 'red',
    shape: 'circle',
    shapeColor: 'blue',
  };
  inquirer.prompt.mockResolvedValue(answers);

  // Call the function
  await init();

  // Verify the expected behavior and output
  expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expect.any(String));
  expect(console.log).toHaveBeenCalledWith('Generated logo.svg');
});
  