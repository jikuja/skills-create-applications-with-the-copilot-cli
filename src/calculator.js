/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   addition       (+)  : adds two numbers
 *   subtraction    (-)  : subtracts second number from first
 *   multiplication (*)  : multiplies two numbers
 *   division       (/)  : divides first number by second (throws on division by zero)
 *   modulo         (%)  : returns the remainder of a divided by b
 *   exponentiation (**)  : returns base raised to the exponent
 *   squareRoot     (sqrt): returns the square root of n (unary; use 0 as second arg)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 * Example: node calculator.js 9 sqrt 0
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , arg1, operator, arg2] = process.argv;

  if (!arg1 || !operator) {
    console.error('Usage: node calculator.js <number1> <operator> [number2]');
    console.error('Operators: + - * / % ** sqrt');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const isSqrt = operator === 'sqrt';

  if (isNaN(a)) {
    console.error('Error: First operand must be a valid number.');
    process.exit(1);
  }

  if (!isSqrt && !arg2) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  const b = isSqrt ? undefined : parseFloat(arg2);

  if (!isSqrt && isNaN(b)) {
    console.error('Error: Second operand must be a valid number.');
    process.exit(1);
  }

  let result;
  try {
    switch (operator) {
      case '+':    result = add(a, b); break;
      case '-':    result = subtract(a, b); break;
      case '*':    result = multiply(a, b); break;
      case '/':    result = divide(a, b); break;
      case '%':    result = modulo(a, b); break;
      case '**':   result = power(a, b); break;
      case 'sqrt': result = squareRoot(a); break;
      default:
        console.error(`Unknown operator: ${operator}. Supported: + - * / % ** sqrt`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  if (isSqrt) {
    console.log(`sqrt(${a}) = ${result}`);
  } else {
    console.log(`${a} ${operator} ${b} = ${result}`);
  }
}
