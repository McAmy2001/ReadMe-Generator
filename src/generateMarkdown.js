// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//  return `# ${data.title}
//
//`;
//}
const generateMarkdown = (object) => {
  console.log(object);
  return `# ${object.title}
## ${object.description}
## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)
  ### Installation: ${object.install} 
  ### Usage: ${object.usage}
  ### License
  ### Contributing: ${object.contrib} 
  ### Tests: ${object.test}
  ### Questions: Contact me at: ${object.email} or ${object.github}
`;
};

module.exports = generateMarkdown;
