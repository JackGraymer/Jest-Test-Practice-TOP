import {capitalize, reverse, calculator} from './assignment'

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