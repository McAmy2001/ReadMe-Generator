// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'No-License') {
    return '';
  } 
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/license-MIT-blue';
  }
  if (license === 'Apache-2.0') {
    return 'https://img.shields.io/badge/license-apache%202.0-blue'
  }
  if (license === 'GPL') {
    return 'https://img.shields.io/badge/license-GPL%203.0-blue'
  }
  if (license === 'BSD-3') {
    return 'https://img.shields.io/badge/license-BSD%203-blue'
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === 'No-License') {
    return '';
  }
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }
  if (license === 'Apache-2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'GPL') {
    return 'https://opensource.org/licenses/gpl-license'
  }
  if (license === 'BSD-3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }
};


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
  console.log(object.license);
  const licenseBadge = renderLicenseBadge(object.license);
  const licenseLink = renderLicenseLink(object.license);
  return `# ${object.title}
![image](${licenseBadge})
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
  ### License: This project is licensed under the ${object.license} license. For more information on this license: ${licenseLink}
  ### Contributing: ${object.contrib} 
  ### Tests: ${object.test}
  ### Questions: Contact me at: [${object.email}](mailto:${object.email}) or [GitHub](github.com/${object.github})
`;
};

module.exports = generateMarkdown;
