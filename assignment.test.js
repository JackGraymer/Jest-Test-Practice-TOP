import capitalize from './assignment'

test('Capitalize first letter of string', () => {
    expect(capitalize('sentence')).toBe('Sentence')
})

