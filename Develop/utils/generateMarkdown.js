function generateMarkdown(data) {
  return `
# ${data.project}
## Description
 ${data.Description}
## Installation
${data.Installation}
## usage
${data.usage}
## Contributing
${data.Contributing}
## Test
${data.Test}
## username
${data.username}
## license
${data.license}
![Image of user](${data.gitHub.profilePicture})

`;
}

module.exports = generateMarkdown;
