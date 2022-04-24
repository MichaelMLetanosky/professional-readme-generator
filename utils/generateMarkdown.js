// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case `APACHE 2.0`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case `BSD 3`:
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    case `GPL 3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case `APACHE 2.0`:
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case `BSD 3`:
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    case `GPL 3.0`:
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case `MIT`:
      return `(https://opensource.org/licenses/MIT)`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);
  licenseSection = `\n\n## License\n\n  Licensed under the [${license}](${licenseLink}) license\n\n`;
  licenseBadge = renderLicenseBadge(license);

  licenseSection = licenseSection.concat(licenseBadge);
  licenseSection = licenseSection.concat(licenseLink);
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Sets up starting mark down
  let header = `# ${data.projectName}\n\n## Description\n\n  ${data.description}`;

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
      !data.contributeInstructions &&
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
    contents = contents.concat(`\n\n## Install\n\n  ${data.installInstructions}`);
  };

  //Checks if there is a photo/gif and creates instruction section
  if (data.mediaURL) {
    toc = toc.concat(`\n1. [Instructions](#instructions)`);
    contents = contents.concat(`\n\n## Instructions\n\n  !(${data.mediaURL})`);
    if (data.userInstructions) {
      contents = contents.concat(`\n\n  ${data.userInstructions}`);
    };
  };

  //Creates instruction section if there isn't a photo but are instructions
  if (!data.mediaURL && data.userInstructions) {
    toc = toc.concat(`\n1. [Instructions](#instructions)`);
    contents = contents.concat(`\n\n## Instructions\n\n  ${data.userInstructions}`);
  }

  //Creates contribute section if included
  if (data.contributeInstructions) {
    toc = toc.concat(`\n1. [Contribute](#contribute)`);
    contents = contents.concat(`\n\n## Contribute\n\n  ${data.contributeInstructions}`);
  };

  //Creates testing section if included
  if (data.testingInstructions) {
    toc = toc.concat(`\n1. [Testing](#testing)`);
    contents = contents.concat(`\n\n## Testing\n\n  ${data.testingInstructions}`);
  };

  //Checks if there are other contributors and creates credit section
  if (data.contributors) {
    toc = toc.concat(`\n1. [Credits](#credits)`);
    contents = contents.concat(`\n\n## Credits\n\n  Project contributors are ${data.contributors}`);
    if (data.contributors) {
      contents = contents.concat(`\n\n  Additional resources used include ${data.resources}`);
    };
  };

  //Creates credit section if there aren't listed contributors but are additional resources used
  if (!data.contributors && data.contributors) {
    toc = toc.concat(`\n1. [Credits](#credits)`);
    contents = contents.concat(`\n\n  Additional resources used include ${data.resources}`);
  }

  //Creates feedback section if included
  if (data.feedback) {
    toc = toc.concat(`\n1. [Feedback](#feedback)`);
    contents = contents.concat(`\n\n## Feedback\n\n  ${data.feedback}`);
  };

  if (data.license !== `None`) {
    licenseSection = renderLicenseSection (data.license);
    toc = toc.concat(`\n1. [License](#license)`);
    contents = contents.concat(licenseSection);
  };

  header = header.concat(toc);
  header = header.concat(`\n---`);
  header = header.concat(contents);

  return header;
}

module.exports = generateMarkdown;
