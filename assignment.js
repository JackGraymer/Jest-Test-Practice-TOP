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
//96
function caesarCipher(sentence, key = 1){
    let cypher = ''
    for( let c of sentence){
        let char = c.charCodeAt(0) + key
        if(char > 127){
            char = char-96
        }
        if(char < 31 ){
            char = char+96
        }
        cypher += String.fromCharCode(char)
            //console.log(c.charCodeAt(0), char, cypher)
    }
    return cypher
}
caesarCipher('AZaz ')


export {
    capitalize,
    reverse,
    calculator,
    caesarCipher
}