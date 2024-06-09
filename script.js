let firstNumText = '';
let num = '';
let oper = '';
let n1 = 0;
let n2 = 0;
let s = 0;
result.innerText = 0;
input.innerText = '';
const inputNum = [0, 0];
let total = 0;

const currentNumButton = document.querySelectorAll('.digit');
const clearButton = document.querySelector('.bclear');
const currentOpButton = document.querySelectorAll('.op:not(.bclear)');

for (let i = 0; i < currentNumButton.length; i++) {
  currentNumButton[i].addEventListener('click', () => {
    num = currentNumButton[i].textContent;

    firstNumText += parseInt(num);
    inputNum[0] = parseInt(firstNumText);
    input.innerText += parseInt(num);
    n1 = inputNum[0];

    inputNum[1] = parseInt(n1);
    inputNum[0] = 0;
    result.innerText = n1;


    if (s === 1) {
      add();
    }
    if (s === 2) {
      subtract();
    }
    if (s === 3) {
      multiplication();
    }
    if (s === 4) {
      division();
    }
  });
}

function add() {
  total = parseFloat(n2) + parseFloat(n1);
  result.innerText = total;
}
function subtract() {
  total = parseFloat(n2) - parseFloat(n1);
  result.innerText = total;
}
function multiplication() {
  total = parseFloat(n2) * parseFloat(n1);
  result.innerText = total;
}
function division() {
  total = parseFloat(n2) / parseFloat(n1);
  result.innerText = total;
}


// Clear

clearButton.addEventListener('click', () => {
  location.reload();
});

for (let i = 0; i < currentOpButton.length; i++) {
  currentOpButton[i].addEventListener('click', () => {
    oper = currentOpButton[i].textContent;

    if (oper === 'x^2') {
      input.innerText += ' ';
      total = parseFloat(result.innerText) * parseFloat(result.innerText);
      result.innerText = total;
      firstNumText = '';
      n2 = result.innerText;
    } else if(oper === '√x') {
      input.innerText += ' ';
      total = parseFloat(Math.sqrt(result.innerText));
      result.innerText = total;
      firstNumText = '';
      n2 = result.innerText;
    } else {
      input.innerText += oper;
      firstNumText = '';
      n2 = result.innerText;
    }

    if (oper === ' + ') {
      s = 1;
    }
    if (oper === ' - ') {
      s = 2;
    }
    if (oper === ' * ') {
      s = 3;
    }
    if (oper === ' / ') {
      s = 4;
    }
  });
}
