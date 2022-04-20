// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`fs`);
const path = require(`path`);
const generateMarkdown = (`./utils/generateMarkdown`)

// TODO: Create an array of questions for user input
const questions = [
    {
    type: `input`,
    message: `What is your project's name?`,
    name: `projectName`,
    // TODO: Add questions for description, installation instructions, usage information, contribution guidelines, and test instructions
    // TODO: Add a list question for liscence information
    // TODO: Add questions for gitHub and email contact ino
    // What's your Github Username
    // What is your email address
    // What is your project title?
    // Please write a short project description
    // Please write a link to a picture or video of the project
    // What kind of license does your project have?
    // What command should be run to install dependencies?
    // What command should be run for tests?
    // What should a contributor know about using the repositiory?
    // List any other main contributors to the repo
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/README.md`, 
        // TODO: Include Answers in a README mock up
        // TODO: Include Title with Project Name
        // TODO: Include linking table of contents
        // TODO: Include license bridge
        // TODO: Include sections for description, installation instructions, usage information, contribution guidelines, and test instructions
        `${data.projectName}`
        // TODO: Include generateMarkdown for license stuff
        // TODO: Add questions section with contact info
        , 
        (error) => error ? console.log(err) : console.log(`Success!`))
}


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(writeToFile(ReamMe, answers))
    .catch((e) => {if (err) throw err;});
}

// Function call to initialize app
init();
