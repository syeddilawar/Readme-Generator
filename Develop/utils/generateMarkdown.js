function generateMarkdown(data) {
  // console.log(data);
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
  
  ## Questions
  You can always reach me at this github profile https://github.com/${data.githubData.login}
 <br>
  My profile picture
  ![My profile picture](${data.githubData.avatar_url})
  `;
}
module.exports = generateMarkdown;
