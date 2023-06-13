const {Circle, Triangle, Square, Shape} = require('../utils/shapes.js');

//write test for each of the classes
describe('Triangle', () => {
    describe('render', () => {
        it(`Should take a color('blue'), text('ooo'), text color('yellow') and return an svg file`, () => {
            const shape = new Triangle()
            shape.shapeColor = 'blue';
            shape.text = 'ooo'
            shape.textColor = 'yellow'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="65,175 150,25 235,175" fill="blue"/>
            <text x="150" y="135" font-size="40" text-anchor="middle" fill="yellow">ooo</text>
        </svg>`)
        })
    })
})


describe('Circle', () => {
    describe('render', () => {
        it(`Should take a color('#565656'/ 'gray'), text('lol'), text color('#ffffff'/ 'white') and return an svg file`, () => {
            const shape = new Circle();
            shape.shapeColor = '#565656'
            shape.text = 'lol'
            shape.textColor = '#ffffff'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="#565656"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="#ffffff">lol</text>
        </svg>`)
        })
    })
})





describe('Square', () => {
    describe('render', () => {
        it(`Should take a color('yellow'), text('Q'), text color('black') and return an SVG text`, () => {
            const shape = new Square();
            shape.shapeColor = 'yellow';
            shape.text = 'Q'
            shape.textColor = 'black'
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="75,25 75,175 225,175 225,25" fill="yellow"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="black">Q</text>
        </svg>`)
        })
    })
})


































