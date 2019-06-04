const inquirer = require('inquirer')

const CLI = {
    type: 'list',
    message: 'Typescript CLI',
    name: 'CLI',
    choices: [
        new inquirer.Separator(' = which you want = '),
        {
            name: 'react'
        },
        {
            name: 'react-native'
        },
        {
            name: 'express'
        },
        {
            name: 'electron'
        }
    ]
}

module.exports = {
    CLI
}