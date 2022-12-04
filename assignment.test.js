import {capitalize, reverse, calculator, caesarCipher, analyzeArray} from './assignment'

test('Capitalize first letter of string', () => {
    expect(capitalize('sentence')).toBe('Sentence')
})

test('Reverse sentence', () => {
    expect (reverse('1357')).toBe('7531')
    expect (reverse('Play Lego')).toBe('ogeL yalP')
})

test('Calculator with add, substract, divide and multiply', () => {
    expect (calculator.add( 3, 5 )).toBe(8)
    expect (calculator.substract(300, 150)).toBe(150)
    expect (calculator.multiply(4, 5)).toBe(20)
    expect (calculator.divide(200, 5)).toBe(40)
})

test('Caesar Cypher encryption and de encryption', () =>{
    expect (caesarCipher('ABcd',1)).toBe('BCde')
    expect (caesarCipher('!ABcd',10)).toBe('+KLmn')
    expect (caesarCipher('+KLmn!' ,-10)).toBe('!ABcdw')
})

test('Analyze Array with average, min, max, and length', () =>{
    expect (analyzeArray([1,7])).toStrictEqual({
        average: 4,
        min: 1,
        max: 7,
        length: 2
      })
    expect (analyzeArray([10,20,30])).toStrictEqual({
        average: 20,
        min: 10,
        max: 30,
        length: 3
      })
})