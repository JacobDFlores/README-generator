// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of you application?',
    'Enter a description for your application.',
    'Please select a license for your application.',
    'What is your github username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
     err ? console.error(err) : console.log('Successfully generated README file!')
   );
}

// TODO: Create a function to initialize app
function init() {
    console.log('');
    console.log(`Welcome to README Generator
    `);
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        }
    ])
    .then((data) =>{
        console.log('')
        generateMarkdown(data, (readmeData) =>{
            writeToFile(`README.md`, readmeData);
        })
    })
}

// Function call to initialize app
init();
