const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress:',
      },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title for your project:',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies:',
        },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for your project:',
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the project:',
      },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests:',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'       
        ],
      },
];
  
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// function to initialise program
function init() {
    // Prompt user for information
    inquirer.prompt(questions)
      .then((userInput) => {
        // Generate README content
        const readmeContent = generateMarkdown(userInput);
  
        // Write to README.md
        writeToFile('output/README.md', readmeContent);
      })
      .catch((error) => {
        console.error('Error generating README:', error);
      });
  }

// function call to initialize program
init();
