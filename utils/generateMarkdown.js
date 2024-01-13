// function to generate markdown for README
function generateMarkdown(data) {
  const contributors = data.contributing.split(",");
  let contributorsList = "";
  contributors.forEach((contributor) => {
    contributorsList += "- " + contributor.trim() + "\n";
  });

  return `# ${data.title}
## Description
${data.description}

The URL of the deployed application: ${data.deployedURL}

## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${contributorsList}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
