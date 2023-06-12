
const colorList = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'brown', 'white', 'black']

const regex = /[0-9a-z]+/i;

const validateColor = (color) => {
    if(colorList.includes(color)){
        return true
    } else if (color.length === 7 && color[0] === '#'){
        // could be hex color with #
        for (let i = 1; i < color.length; i++){
            if(!color[i].match(regex)){
                console.log(`This ${color[i]} is not hexidecimal or in the color list`)
                return false
            }
        }
    } else {
        return false
    }
}

module.exports = validateColor;
