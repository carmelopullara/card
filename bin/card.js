#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 2,
  borderStyle: 'round'
}

const label = text => chalk.white.bold(`${text}:`)
const link = text => chalk.blue(text)

const data = {
  name: chalk.blue.bold('Carmelo Pullara'),
  handle: chalk.white('@carmelopullara'),
  work: chalk.yellow.bold('Front-End Developer @ Toptal'),
  portfolio: link('https://pullara.me'),
  twitter: link('https://twitter.com/carmelopullara'),
  github: link('https://github.com/carmelopullara'),
  linkedin: link('https://linkedin.com/in/carmelopullara/'),
  npx: chalk.yellow.bold('npx carmelo'),
}

const output = `
  ${data.name} / ${data.handle}
  ${data.work}     

   ${label('Website')} ${data.portfolio}
   ${label('Twitter')} ${data.twitter}
    ${label('GitHub')} ${data.github}
  ${label('LinkedIn')} ${data.linkedin}

  ${label('$')} ${data.npx}
`

console.log(chalk.blue(boxen(output, options)))
