

class Shape{
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}




class Circle extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor)
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="65,175 150,25 235,175" fill="${this.shapeColor}"/>
            <text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}


class Square extends Shape{
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="75,25 75,175 225,175 225,25" fill="${this.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}



module.exports = {Shape, Circle, Triangle, Square};
