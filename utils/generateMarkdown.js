// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } else if (license === 'Eclipse Public License') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'

  } else if (license === 'IBM License') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'

  } else if (license === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (license === 'MIT License') {
    return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)'

  } else if (license === 'Eclipse Public License') {
    return '[https://opensource.org/licenses/EPL-1.0](https://opensource.org/licenses/EPL-1.0)'

  } else if (license === 'IBM License') {
    return '[https://opensource.org/licenses/IPL-1.0](https://opensource.org/licenses/IPL-1.0)'

  } else if (license === 'Apache License') {
    return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'

  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'N/A') {
      return 'This application is not under any License'
    } else {
      return `This  application is under ${license}`
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}

## Description

  What  motivated me to build this application is  ${data.motivation}
  And the reason why decided to built this project  ${data.reason}
  This application is built as response to the  ${data.problemSolve}

## Table of Contents 

*[Installation](##installation)
*[Usage](##usage)
*[License](##License)
*[Credit](##credit)
*[Contributing](##contributing)
*[Tests](##tests)
*[Questions](##questions)
      
  
## Installation

Installation Steps of the application: ${data.installation}

## Usage 

To use the application, ${data.usage} 

## License 

${renderLicenseSection(data.license)}
    
${renderLicenseLink(data.license)}

## Credit

Credit goes to ${data.credit}

## Contributing

Contributors for this project are: ${data.contributor}

## Tests

Instructions to be followed  to test the application: ${data.test}

## Questions

For moe information, please contact me at:
      
https://github.com/${data.username}/${data.title}

    ${data.email}
  `;
}


module.exports = generateMarkdown;
