const {Circle, Triangle, Square, Shape} = require('../utils/shapes.js');

//write test for each of the classes
describe('Triangle', () => {
    describe('render', () => {
        it('Should take a color and text and return an svg file', () => {
            const shape = new Triangle()
            shape.color = 'blue';
            shape.text = 'ddd'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="65,175 150,25 235,175" fill="blue"/>
            <text x="150" y="135" font-size="40" text-anchor="middle" fill="white">ddd</text>
        </svg>`)
        })
    })
})


describe('Circle', () => {
    describe('render', () => {
        it('Should take a color and text and return an svg file', () => {
            const shape = new Circle();
            shape.color = '#fefefe'
            shape.text = 'lol'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="#fefefe"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">lol</text>
        </svg>`)
        })
    })
})





describe('Square', () => {
    describe('render', () => {
        it('Should take a color and text and return an SVG text', () => {
            const shape = new Square();
            shape.color = 'yellow';
            shape.text = 'Q'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="75,25 75,175 225,175 225,25" fill="yellow"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Q</text>
        </svg>`)
        })
    })
})


































