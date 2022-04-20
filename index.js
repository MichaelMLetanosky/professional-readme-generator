// TODO: Include packages needed for this application
var fs = require(`fs`);
var inquirer = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [
    {
    type: `input`,
    message: `What is your project's name?`,
    name: `projectName`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/README.md`, 
        //TODO Include Answers
        `${data.projectName}`
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
