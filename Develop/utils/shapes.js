

class Shape{
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
}




class Circle extends Shape{
    constructor(color, text){
        super(color, text)
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape{
    constructor(color, text){
        super(color, text)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="65,175 150,25 235,175" fill="${this.color}"/>
            <text x="150" y="135" font-size="40" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}


class Square extends Shape{
    constructor(color, text){
        super(color, text)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="75,25 75,175 225,175 225,25" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`
    }
}



module.exports = {Shape, Circle, Triangle, Square};
