//Import libraries
const inquirer = require('inquirer');
const validateColor = require('./utils/validate.js')
const Logo = require('./utils/logo.js')

questions = [
    {
        type: 'input',
        message: 'What color would you like your logo to be?',
        name: 'color'
    }, 
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape'
    },
    {
        type: 'input', 
        message: 'What text would you like in your logo?',
        name: 'text'
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        // validate inputs
        if (answers.text.length > 3){
            throw new Error(`Logo text can be up to 3 characters in length.`)
        }
        if (validateColor(answers.color) == false){
            throw new Error(`Please enter a valid color.`)
        }
        
        const logo = new Logo(answers.color, answers.shape, answers.text)
        console.log(logo)   
        // logo.generateLogo


    })
    .catch((err) => (err) ? console.error(err) : console.log('No errors caught'))


   




