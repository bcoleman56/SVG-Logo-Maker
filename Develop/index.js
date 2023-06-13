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
                return "Please enter a 'keyword' or 'hexidecimal."
            }
            return true;
        },
        name: 'shapeColor'
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
    },
    {
        type: 'input',
        message: 'What color text?',
        validate: (answer) => {
            if (validateColor(answer) == false){
                return "Please enter a 'keyword' or 'hexidecimal."
            }
            return true;
        },
        name: 'textColor'
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        // sees what shape the user made and creats that object
        switch (answers.shape){
            case 'triangle':
                shape = new Triangle(answers.shapeColor, answers.text, answers.textColor);
                break;
            case 'square':
                shape = new Square(answers.shapeColor, answers.text, answers.textColor);
                break;
            case 'circle':
                shape = new Circle(answers.shapeColor, answers.text, answers.textColor);
                break
        }
        // run fucniton that makes an svg file and 
        fs.writeFile('./output/logo.svg', shape.render(), (err) => {
            (err) ? console.error : console.log("SVG file Created! Check the output folder")
        })

    })
    .catch((err) => (err) ? console.error(err) : console.log('No errors caught'))


   






