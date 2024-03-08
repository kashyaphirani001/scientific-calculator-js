const inputValue = document.getElementById('user-input');
const btn = document.querySelectorAll('.btn');
const clearInput = document.getElementById('clear-input');
const result = document.getElementById('result');

function calculateSinValue() {
  inputValue.value = Math.sin(inputValue.value);
}

function calculateCosValue() {
  inputValue.value = Math.cos(inputValue.value);
}

function calculateTanValue() {
  inputValue.value = Math.tan(inputValue.value);
}

function calculatePow() {
  inputValue.value = Math.pow(inputValue.value, 2);
}

function calculateSqrt() {
  inputValue.value = Math.sqrt(inputValue.value, 2);
}

function calculateLogValue() {
  inputValue.value = Math.log10(inputValue.value);
}

function piValue() {
  inputValue.value = 3.14159265359;
}

function eulerNumber() {
  inputValue.value = 2.71828182846;
}

function factorial() {
  let i, num, f;
  f = 1;
  num = inputValue.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  inputValue.value = f;
}

function backSpace() {
  inputValue.value = inputValue.value.substr(0, inputValue.value.length - 1);
}

for (item of btn) {
  item.addEventListener('click', (e) => {
    btntext = e.target.innerText;

    if (btntext == '×') {
      btntext = '*';
    }

    if (btntext == '÷') {
      btntext = '/';
    }
    inputValue.value += btntext;
  });
}

function calculateResult() {
  let expression = inputValue.value;
  let operators = ['+', '-', '*', '/', '%'];
  let currentOperator = '';
  let currentOperand = '';
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (operators.includes(char)) {
      if (currentOperator === '') {
        currentOperator = char;
        result = parseFloat(currentOperand);
        currentOperand = '';
      } else {
        result = evaluate(result, parseFloat(currentOperand), currentOperator);
        currentOperator = char;
        currentOperand = '';
      }
    } else {
      currentOperand += char;
    }
  }

  if (currentOperand !== '') {
    result = evaluate(result, parseFloat(currentOperand), currentOperator);
  }

  inputValue.value = result;
}

function evaluate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '%':
      return operand1 % operand2;
    case '/':
      if (operand2 !== 0) {
        return operand1 / operand2;
      } else {
        return 'Invalid';
      }
  }
}

clearInput.addEventListener('click', () => {
  inputValue.value = '';
});

result.addEventListener('click', calculateResult);
