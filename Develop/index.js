const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const questions = [
  {
    type: "input",
    name: "project",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "Description",
    message: "How would your description your project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "Enter command to install necessary dependencies:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter necessary for use of application:",
  },
  {
    type: "list",
    message: "Select a license badge:",
    choices: ["Website Down", "Website Up", "NPM Inquirer", "Made With JS"],
    name: "license",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Describe contribution details:",
  },
  {
    type: "input",
    name: "Test",
    message: "Provide prompt to start testing suite:",
  },
  {
    type: "input",
    name: "username",
    message: "What is your gitHub username?",
  },
];

function writeToFile(fileName, data) {
  console.log(data);
  return fs.writeFileSync(fileName, data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);

      writeToFile("readme.md", generateMarkdown(answers));
    })

    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

init();
