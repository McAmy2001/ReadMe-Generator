// Packages/links needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');
const { rejects } = require('assert');


// Question array inquirer function for user input
const questions = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub user name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please enter the installation insructions for your project.',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project.',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the usage information.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contrib',
        message: 'Please enter the contribution guidelines for your project.',
        validate: contribInput => {
          if (contribInput) {
            return true;
          } else {
            console.log('Please enter the contribution guidelines.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter the test instructions for your project.',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter the test insructions.');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for your project?',
        choices: ['MIT', 'Apache-2.0', 'GPL', 'BSD-3', 'No-License'],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please choose an option.');
            return false;
          }
        }
      },
  ]);
};
questions()
//.then(answers => {
//  const readMeInfo = answers
.then(answers => {
  return generateMarkdown(answers);
})
  //console.log(readMeInfo);
  //const pageMarkdown = generateMarkdown(readMeInfo);
  //console.log(pageMarkdown);
.then(pageMarkdown => {
  return writeToFile('./dist/README.md', pageMarkdown);
  })
  .catch(err => {
    console.log(err);
  });




// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: 'Page generated'
    });
  });
  });
};

//function init() 