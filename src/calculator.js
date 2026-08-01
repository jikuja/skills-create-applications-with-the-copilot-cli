/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   addition       (+)   : adds two numbers
 *   subtraction    (-)   : subtracts second number from first
 *   multiplication (*)   : multiplies two numbers
 *   division       (/)   : divides first number by second (throws on division by zero)
 *   modulo         (%)   : remainder of first number divided by second (throws on modulo by zero)
 *   exponentiation (**)  : raises first number to the power of the second
 *   square root    (sqrt): returns the square root of a single number (throws on negative input)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 *        node calculator.js <number> sqrt
 * Example: node calculator.js 10 + 5
 *          node calculator.js 9 sqrt
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
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Exponentiation: returns a raised to the power of b
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a; throws if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Square root of negative number');
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };

// CLI entry point
if (require.main === module) {
  const [, , arg1, operator, arg2] = process.argv;

  if (!arg1 || !operator) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('       node calculator.js <number> sqrt');
    console.error('Operators: + - * / % ** sqrt');
    process.exit(1);
  }

  const a = parseFloat(arg1);

  if (isNaN(a)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  // Square root only needs one operand
  if (operator === 'sqrt') {
    let result;
    try {
      result = sqrt(a);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    console.log(`sqrt(${a}) = ${result}`);
    process.exit(0);
  }

  if (!arg2) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  const b = parseFloat(arg2);

  if (isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (operator) {
      case '+': result = add(a, b); break;
      case '-': result = subtract(a, b); break;
      case '*': result = multiply(a, b); break;
      case '/': result = divide(a, b); break;
      case '%': result = modulo(a, b); break;
      case '**': result = exponentiate(a, b); break;
      default:
        console.error(`Unknown operator: ${operator}. Supported: + - * / % ** sqrt`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
