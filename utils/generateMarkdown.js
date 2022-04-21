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
  console.log(data)
  let header = `# ${data.projectName}\n\n## Description\n\n${data.description}`

  let toc = `\n\n## Table of Contents\n---`

  let contents = ``

  if (!data.projectName || !data.description) {
    console.log(`Your project must include a title and description`);
    return;
  };

  if (!data.installInstructions &&
      !data.mediaURL &&
      !data.userInstructions &&
      !data.contributInstructions &&
      !data.testingInstructions &&
      !data.contributors &&
      !data.resources &&
      !data.feedback &&
      data.license == `None`) {
    return header
  }

  if (data.installInstructions) {
    toc = toc.concat(`\n1. [Install](#install)`)
    contents = contents.concat(`\n\n## Install

${data.installInstructions}`)
  }

  header = header.concat(toc)
  header = header.concat(`\n---`)
  header = header.concat(contents)

  return header;
}

module.exports = generateMarkdown;
