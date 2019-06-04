const inquirer = require('inquirer')

// prompt info
const typescriptInfo = require('./prompt_info/typescript')
const javascriptInfo = require('./prompt_info/javascript')

inquirer
    .prompt([
        {
            type: 'list',
            message: 'initialize with NODEJS',
            name: 'language',
            choices: [
                new inquirer.Separator(' = which you want = '),
                {
                    name: 'typescript'
                },
                {
                    name: 'javascript'
                }
            ]
        }
    ])
    .then(answers => {
        if (answers.language === 'typescript') {
            console.log('you choose typescript')
            inquirer
                .prompt(typescriptInfo.CLI).then(info => console.log(JSON.stringify(info, null, '  ')))
        } else if (answers.language === 'javascript') {
            console.log('you choice javascript')
            inquirer
                .prompt(javascriptInfo.CLI).then(info => console.log(JSON.stringify(info, null, '  ')))
        } else {

        }
        console.log(JSON.stringify(answers, null, '  '));
    });