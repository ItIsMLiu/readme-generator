const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the table of contents?",
        name: "contents",
    },
    {
        type: "input",
        message: "Please enter the installtion details.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter the usage details?",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license?",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-clause 'Simplified' license", "BSD 3-clause 'New' or 'Revised' license", "Boost Software License 1.0", "Creative Commons Zero V1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
        default: "MIT License",
    },
    {
        type: "input",
        message: "Who are the contributors?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please enter tests details.",
        name: "tests",
    },
    {
        type: "input",
        message: "Please enter questions details.",
        name: "questions",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        let markdownContents = generateMarkdown(answers);
        writeToFile("README_autogen.md", markdownContents);
    });
}

// function call to initialize program
init();
