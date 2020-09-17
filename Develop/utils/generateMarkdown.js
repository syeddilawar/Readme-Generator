function generateMarkdown(data) {
  return `
# ${data.project}
## ${data.Description}
## ${data.Installation}
## ${data.usage}
## ${data.Contributing}
## ${data.Test}
## ${data.username}
## ${data.license}

`;
}

module.exports = generateMarkdown;
