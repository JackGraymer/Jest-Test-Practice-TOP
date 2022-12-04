let sentence = 'test a jest'

function capitalize(sentence){
    console.log(sentence)
    return sentence[0].toUpperCase() + sentence.slice(1)
}

function reverse(sentence){
    sentence = sentence.split("").reverse().join("")
    return sentence
}

const calculator = {
    add(a, b) {
        return a+b
    },

    substract(a, b){
        return a-b
    },

    multiply(a, b) {
        return a*b
    },

    divide(a, b){
        return a/b
    }
}


export {
    capitalize,
    reverse,
    calculator
}