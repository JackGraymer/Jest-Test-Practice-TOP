import {capitalize, reverse} from './assignment'

test('Capitalize first letter of string', () => {
    expect(capitalize('sentence')).toBe('Sentence')
})

test('Reverse sentence', () => {
    expect (reverse('1357')).toBe('7531')
    expect (reverse('Play Lego')).toBe('ogeL yalP')
})