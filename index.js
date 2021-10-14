const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project',
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},
{
    type: 'input',
    name: 'installation',
    message: 'How to install the project?',
    default: '',
},
{
    type: 'input',
    name: 'test',
    message: 'How to test the project?',
    default: 'npm test',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use the repo and project?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please include all contributers!!',
},
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
});
}

init();