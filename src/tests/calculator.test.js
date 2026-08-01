/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all supported operations:
 *   addition (+), subtraction (-), multiplication (*), division (/),
 *   modulo (%), exponentiation (**), square root (sqrt)
 * Including edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require('../calculator');

// --- Addition (+) ---
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => expect(add(2, 3)).toBe(5));
  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds positive and negative number', () => expect(add(10, -3)).toBe(7));
  test('adds zero to a number', () => expect(add(5, 0)).toBe(5));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBe(4));
});

// --- Subtraction (-) ---
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts resulting in negative', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative number', () => expect(subtract(5, -3)).toBe(8));
  test('subtracts zero', () => expect(subtract(7, 0)).toBe(7));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
});

// --- Multiplication (*) ---
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => expect(multiply(45, 2)).toBe(90));
  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies positive and negative', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBe(10));
});

// --- Division (/) ---
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => expect(divide(20, 5)).toBe(4));
  test('divides positive numbers', () => expect(divide(10, 2)).toBe(5));
  test('divides resulting in decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('divides negative by positive', () => expect(divide(-12, 4)).toBe(-3));
  test('divides negative by negative', () => expect(divide(-9, -3)).toBe(3));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing negative by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero');
  });
});

// --- Modulo (%) ---
describe('modulo', () => {
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when evenly divisible', () => expect(modulo(9, 3)).toBe(0));
  test('modulo with negative dividend', () => expect(modulo(-10, 3)).toBe(-1));
  test('modulo with negative divisor', () => expect(modulo(10, -3)).toBe(1));
  test('modulo of decimal numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero');
  });
  test('throws an error when modulo negative by zero', () => {
    expect(() => modulo(-5, 0)).toThrow('Modulo by zero');
  });
});

// --- Exponentiation (**) ---
describe('exponentiate', () => {
  test('2 ** 10 = 1024', () => expect(exponentiate(2, 10)).toBe(1024));
  test('raises to power of zero', () => expect(exponentiate(5, 0)).toBe(1));
  test('raises to power of one', () => expect(exponentiate(7, 1)).toBe(7));
  test('raises negative base to even power', () => expect(exponentiate(-2, 2)).toBe(4));
  test('raises negative base to odd power', () => expect(exponentiate(-2, 3)).toBe(-8));
  test('raises to fractional power', () => expect(exponentiate(4, 0.5)).toBe(2));
  test('zero to any positive power is zero', () => expect(exponentiate(0, 5)).toBe(0));
});

// --- Square Root (sqrt) ---
describe('sqrt', () => {
  test('sqrt(9) = 3 (image example)', () => expect(sqrt(9)).toBe(3));
  test('sqrt(4) = 2', () => expect(sqrt(4)).toBe(2));
  test('sqrt(0) = 0', () => expect(sqrt(0)).toBe(0));
  test('sqrt(2) is approximately 1.414', () => expect(sqrt(2)).toBeCloseTo(1.4142135623730951));
  test('sqrt of a decimal', () => expect(sqrt(0.25)).toBe(0.5));

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });
  test('throws an error for negative decimal', () => {
    expect(() => sqrt(-0.5)).toThrow('Square root of negative number');
  });
});
