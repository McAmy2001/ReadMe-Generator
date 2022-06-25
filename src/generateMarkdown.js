// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'No-License') {
    return '';
  } 
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache-2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'BSD-3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
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
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === 'GPL') {
    return 'https://opensource.org/licenses/gpl-license';
  }
  if (license === 'BSD-3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === 'No-License') {
    return '';
  } else {
    return "This project is licensed under the " + license + " license.";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (object) => {
  console.log(object.license);
  const licenseBadge = renderLicenseBadge(object.license);
  const licenseLink = renderLicenseLink(object.license);
  const licenseSection = renderLicenseSection(object.license);
  const currentYear = new Date().getFullYear();
  return `# ${object.title}
${licenseBadge}
## ${object.description}
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#tests)
- [Questions](#questions)
## Installation 
${object.install} 
## Usage 
${object.usage}
## License 
&copy; ${currentYear} by ${object.name}. 
${licenseSection}
${licenseLink}  
## Contributing 
${object.contrib} 
## Tests 
${object.test}
## Questions 
Contact me at: [${object.email}](mailto:${object.email}) or [GitHub](https://github.com/${object.github}/)
`;
};

module.exports = generateMarkdown;
