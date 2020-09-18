const util = require("util");
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");
const writeFileAsync = util.promisify(fs.writeFile);

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
  {
    type: "list",
    message: "Select a license badge:",
    choices: ["Website Down", "Website Up", "NPM Inquirer", "Made With JS"],
    name: "license",
  },
];

function writeToFile(fileName, data) {
  console.log(data);
  
  writeFileAsync(fileName, data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers);
      console.log("i m here");

      const data = generateMarkdown(answers);
      console.log(typeof data);

      writeToFile("readme.md", data);
    })

    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}
async function gitHubRequest(userName) {
  const answer = await inquirer.prompt(questions);
  console.log(answer);
  const data = await gitHubRequest(answer.userName);
  console.log(data);
  answer.gitHub = { profilePicture: data.avatar_url, email: data.email };
  console.log(answer);
  writeToFile("readme.md", answer);

  let result;
  const queryUrl = `https://api.github.com/users/${userName}`;
  try {
    const { data } = await axios.get(queryUrl);
    result = data;
  } catch (e) {
    console.log(e);
  }
  return result;
}

init();
