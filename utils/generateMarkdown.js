// function to generate markdown for README
let badge;

function generateMarkdown(data) {
  generateBadge(data.license);
  
  const allContributors = data.contributors.split(",");
  let contributorsList = "";
  allContributors.forEach((contributor) => {
    contributorsList += "- " + contributor.trim() + "\n";
  });

  return `# ${data.title}
${badge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
Notice: The application is covered under the ${data.license}.  

## Contributing
Contributors to this project:
${contributorsList}

Instruction on how to make contributions:
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please email me using the email address below.
- My GitHub username is ${data.username}. 
- My GitHub profile: https://github.com/${data.username}
- My email address: ${data.email} 
`;
}

function generateBadge(data) {
  switch (data) {
    case "Apache License 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "GNU General Public License v3.0":
      badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "MIT License":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "BSD 2-clause 'Simplified' license":
      badge = "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
      break;
    case "BSD 3-clause 'New' or 'Revised' license":
      badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case "Boost Software License 1.0":
      badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      break;
    case "Creative Commons Zero V1.0 Universal":
      badge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      break;
    case "Eclipse Public License 2.0":
      badge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      break;
    case "GNU General Public License v2.0":
      badge = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
      break;
    case"GNU Lesser General Public License v2.1":
      badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      break;
    case "Mozilla Public License 2.0":
      badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
    case"The Unlicense":
      badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
  }
}

module.exports = generateMarkdown;
