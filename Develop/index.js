const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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
    name: "TOC",
    message: "How would you description your project?",
  },
  // {
  //   type: "input",
  //   name: "Installation",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "usage",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "License",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "Contributing",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "Test",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "Questions",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "User Github portfolio picture",
  //   message: "How would you description your project?",
  // },
  // {
  //   type: "input",
  //   name: "user Github email",
  //   message: "How would you description your project?",
  // },
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
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

init();
