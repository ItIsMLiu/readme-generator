# readme-generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 

A command-line application has been crafted to rapidly generate a polished README.md file for a new project. The invocation of this command-line app is initiated by using the following command: node index.js. Subsequently, it prompts the user to provide answers to pertinent questions. These questions encompass the purpose of the app, usage instructions, installation guidelines, procedures for reporting issues, and avenues for making contributions.

The link to walkthrough video: https://www.youtube.com/watch?v=ATXuIYVWHwk

A set of initial code files, as depicted in the second commit, was given, featuring javascript and json files. The project then underwent further development, incorporating my recently acquired skills in JavaScript ES6 and npm. Below, I outline how these skills were seamlessly integrated into the project:

- Node and npm
- Use of the Inquirer package
- Read, Write and append file
- Arrow function
- Template Literals

## Installation

In your terminal, change directory to a location where you would like to clone the repo, then run the below code line by line:
``` terminal
git clone git@github.com:ItIsMLiu/readme-generator.git
```
``` terminal
cd readme-generator 
```
``` terminal
npm install inquirer@8.0.0
```
``` terminal
node index.js
```

## Usage 

To launch the README generator application, open your terminal and proceed with the installation steps outlined above. Subsequently, the user will receive prompts to provide information regarding the application repository, including the project title, description, table of contents, installation instructions, usage details, licensing information, contribution guidelines, testing procedures, and any questions they may have.

The command-line application will seamlessly process user input, culminating in the generation of a polished and professional README.md file, complete with the relevant sections and details. The chosen license badge, selected from a predefined list, is placed beneath the README file's title. In the Questions section, the user's provided GitHub username, email address, and a link to their GitHub profile are automatically incorporated, accompanied by instructions for reaching them with further inquiries. Clicking on the links within the Table of Contents seamlessly navigates users to the corresponding sections of the README.

The sample_README.md file is generated and stored in the readme-generator folder.

## Credits

Other resources used as guides:
- Make a readme guide: https://www.makeareadme.com/
- Inquirer: https://www.npmjs.com/package/inquirer

## License

MIT license (Please refer to the LICENSE in the repository).