function generateMarkdown(data) {
  return `
# ${data.project}

${data.Description}

`;
}

module.exports = generateMarkdown;
