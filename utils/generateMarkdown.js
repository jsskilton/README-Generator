const fs = require('fs');
const path = require('path');

// function to extract the license - this would be better as doesnt rely on user input but doesnt meet acceptance criteria
// function readLicenseFile() {
//   const licenseFilePath = path.join(__dirname, '..', 'LICENSE');
//   try {
//     const licenseContent = fs.readFileSync(licenseFilePath, 'utf8');
//     const firstLine = licenseContent.split('\n')[0].trim();
//     return firstLine;
//   } catch (error) {
//     console.error('Error reading LICENSE file:', error);
//     return 'License information not available';
//   }
// }

// function to generate a license badge (based on correct user input)
function generateLicenseBadge(license) {
  const formattedLicense = encodeURIComponent(license);
  const badgeURL = `https://img.shields.io/badge/license-${formattedLicense}-brightgreen.svg`;

  return `![${license} License](${badgeURL})`;
}


// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = generateLicenseBadge(data.license);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This application is covered under the ${data.license}.

## Badges
${licenseBadge}

## Questions
For additional questions, you can reach me at [GitHub](https://github.com/${data.username}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
