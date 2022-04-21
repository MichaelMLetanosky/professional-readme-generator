// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
// List of questions/prompts to fill in ReadMe file
const questions = [
    {
    type: `input`,
    message: `What is your project's name?`,
    name: `projectName`,
    },
    {
    type: `input`,
    message: `Write a brief description of your project`,
    name: `description`,
    },
    {
    type: `input`,
    message: `What special instructions are there for installing your project?`,
    name: `installInstructions`,
    },
    {
    type: `input`,
    message: `Please submit a link to a photo or video of your project, if any`,
    name: `mediaURL`,
    },
    {
    type: `input`,
    message: `What special instructions are there for using your project/application?`,
    name: `userInstructions`,
    },
    {
    type: `input`,
    message: `What special instructions are there for contributing to your project?`,
    name: `contributeInstructions`,
    },
    {
    type: `input`,
    message: `What special instructions are there for testing your project?`,
    name: `testingInstructions`,
    },
    {
    type: `input`,
    message: `List any other contributors to this project`,
    name: `contributors`,
    },
    {
    type: `input`,
    message: `List any other 3rd party assets or additional resources used for this project`,
    name: `resources`,
    },
    {
    type: `input`,
    message: `How should someone submit feedback or report issues for the project?`,
    name: `feedback`,
    },
    {
    type: `list`,
    message: `Which of these licenses are you using?`,
    name: `license`,
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, generateMarkdown(data), (e) => e ? console.log(e) : console.log(`Success! File is in Output Folder`))
}


// TODO: Create a function to initialize app
// Starts the inquirer to prompt answers to feed to the writeToFile function
function init() {
  const readMe = `README.md`

  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(readMe, answers))
    .catch((e) => {if (e) throw e;});
}

// Function call to initialize app
init();
