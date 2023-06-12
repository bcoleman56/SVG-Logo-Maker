//Import libraries
const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('./utils/validate.js');
const {Circle, Triangle, Square} = require('./utils/shapes.js');


questions = [
    {
        type: 'input',
        message: 'What color would you like your logo to be?',
        validate: (answer) => {
            if (validateColor(answer) == false){
                return "Please enter a valid color."
            }
            return true;
        },
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
        validate: (answer) => {
            if (answer.length > 3){
                return "Logo text can be up to 3 characters in length."
            }
            return true;
            
        },
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
        // sees what shape the user made and creats that object
        switch (answers.shape){
            case 'triangle':
                shape = new Triangle(answers.color, answers.text);
                break;
            case 'square':
                shape = new Square(answers.color, answers.text);
                break;
            case 'circle':
                shape = new Circle(answers.color, answers.text);
                break
        }
        // run fucniton that makes an svg file and 
        fs.writeFile('./output/logo.svg', shape.render(), (err) => {
            (err) ? console.error : console.log("SVG file Created! Check the output folder")
        })

    })
    .catch((err) => (err) ? console.error(err) : console.log('No errors caught'))


   






