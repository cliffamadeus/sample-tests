// arithmetic.test.js
const Arithmetic = require('./arithmetic');

describe('Arithmetic Operations', () => {
    test('addition of two numbers', () => {
        expect(Arithmetic.add(2, 3)).toBe(5);
        expect(Arithmetic.add(-1, 1)).toBe(0);
    });

    test('subtraction of two numbers', () => {
        expect(Arithmetic.subtract(5, 3)).toBe(2);
        expect(Arithmetic.subtract(3, 5)).toBe(-2);
    });

    test('multiplication of two numbers', () => {
        expect(Arithmetic.multiply(2, 3)).toBe(6);
        expect(Arithmetic.multiply(-1, 5)).toBe(-5);
    });

    test('division of two numbers', () => {
        expect(Arithmetic.divide(6, 2)).toBe(3);
        expect(Arithmetic.divide(-6, 3)).toBe(-2);
    });

    test('division by zero', () => {
        expect(() => {
            Arithmetic.divide(1, 0);
        }).toThrow('Cannot divide by zero');
    });
});
