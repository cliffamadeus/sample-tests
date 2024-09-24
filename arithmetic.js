// arithmetic.js
class Arithmetic {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}

module.exports = Arithmetic;

function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    try {
        switch (operation) {
            case 'add':
                result = Arithmetic.add(num1, num2);
                break;
            case 'subtract':
                result = Arithmetic.subtract(num1, num2);
                break;
            case 'multiply':
                result = Arithmetic.multiply(num1, num2);
                break;
            case 'divide':
                result = Arithmetic.divide(num1, num2);
                break;
            default:
                result = 'Invalid operation';
        }
        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
}
