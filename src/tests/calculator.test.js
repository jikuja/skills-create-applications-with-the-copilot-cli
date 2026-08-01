/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   addition (+), subtraction (-), multiplication (*), division (/)
 * Including edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
