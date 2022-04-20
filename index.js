// TODO: Include packages needed for this application
var fs = require(`fs`);
var inquirer = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [
    {
    type: `input`,
    message: `What is your project's name?`,
    name: `projectName`,
    // TODO: Add questions for description, installation instructions, usage information, contribution guidelines, and test instructions
    // TODO: Add a list question for liscence information
    // TODO: Add questions for gitHub and email contact ino
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
