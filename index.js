const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const readmeDataArgs = process.argv.slice(2);
const [title, github] = readmeDataArgs;

fs.writeFile('README.md', generateMarkdown(title, github), err => {
  if (err) throw err;
  console.log('Page generated');
});