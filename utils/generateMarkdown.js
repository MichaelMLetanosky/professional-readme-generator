// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Sets up starting mark down
  let header = `# ${data.projectName}\n\n## Description\n\n${data.description}`;

  let toc = `\n\n## Table of Contents\n---`;

  let contents = ``;

  // Checks for a title and description and won't populate the ReadMe unless they're included
  if (!data.projectName || !data.description) {
    console.log(`Your project must include a title and description`);
    return ``;
  };

  //Checks if there was any more included comments, if not it generates a very basic ReadMe
  if (!data.installInstructions &&
      !data.mediaURL &&
      !data.userInstructions &&
      !data.contributInstructions &&
      !data.testingInstructions &&
      !data.contributors &&
      !data.resources &&
      !data.feedback &&
      data.license == `None`) {
    return header;
  };

  //Checks for install instructions, adds them to the Table of Contents and the Content section if included
  if (data.installInstructions) {
    toc = toc.concat(`\n1. [Install](#install)`);
    contents = contents.concat(`\n\n## Install\n\n${data.installInstructions}`);
  };

  //Checks if there is a photo/gif and creates instruction section
  if (data.mediaURL) {
    toc = toc.concat(`\n1. [Instructions](#instructions)`);
    contents = contents.concat(`\n\n## Instructions\n\n!(${data.mediaURL})`);
    if (data.userInstructions) {
      contents = contents.concat(`\n\n${data.userInstructions}`);
    };
  };

  //Creates instruction section if there isn't a photo but are instructions
  if (!data.mediaURL && data.userInstructions) {
    toc = toc.concat(`\n1. [Instructions](#instructions)`);
    contents = contents.concat(`\n\n## Instructions\n\n${data.userInstructions}`);
  }

  //Creates contribute section if included
  if (data.contributInstructions) {
    toc = toc.concat(`\n1. [Contribute](#contribute)`);
    contents = contents.concat(`\n\n## Contribute\n\n${data.contributInstructions}`);
  };

  //Creates testing section if included
  if (data.testingInstructions) {
    toc = toc.concat(`\n1. [Testing](#testing)`);
    contents = contents.concat(`\n\n## Testing\n\n${data.testingInstructions}`);
  };

  //Creates testing section if included
  if (data.testingInstructions) {
    toc = toc.concat(`\n1. [Testing](#testing)`);
    contents = contents.concat(`\n\n## Testing\n\n${data.testingInstructions}`);
  };

  //Checks if there are other contributors and creates credit section
  if (data.contributors) {
    toc = toc.concat(`\n1. [Credits](#credits)`);
    contents = contents.concat(`\n\n## Credits\n\nProject contributors are ${data.contributors}`);
    if (data.contributors) {
      contents = contents.concat(`\n\nAdditional resources used include ${data.resources}`);
    };
  };

  //Creates contributor section if there aren't listed contributors but are additional resources used
  if (!data.contributors && data.contributors) {
    toc = toc.concat(`\n1. [Credits](#credits)`);
    contents = contents.concat(`\n\nAdditional resources used include ${data.resources}`);
  }

  

  header = header.concat(toc);
  header = header.concat(`\n---`);
  header = header.concat(contents);

  return header;
}

module.exports = generateMarkdown;
