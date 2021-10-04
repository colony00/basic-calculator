const operators = {
  add: (a,b) => {
    return a+b;
  },

  subtract: (a,b) => {
    return a-b;
  },

  multiply: (a,b) => {
    return a*b;
  },

  divide: (a,b) => {
    return a/b;
  }
}

const operate = (a,operator,b) => {
  return operators[signDict[operator]](a,b)
}

const signDict = {
  '+':'add',
  '-':'subtract',
  '*':'multiply',
  '/':'divide'
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector(".display");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multi = document.querySelector(".multi");
const div = document.querySelector(".div");
const zero = document.querySelector(".number.zero");
const one = document.querySelector(".number.one");
const two = document.querySelector(".number.two");
const three = document.querySelector(".number.three");
const four = document.querySelector(".number.four");
const five = document.querySelector(".number.five");
const six = document.querySelector(".number.six");
const seven = document.querySelector(".number.seven");
const eight = document.querySelector(".number.eight");
const nine = document.querySelector(".number.nine");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

const numbers = [zero,one,two,three,four,five,six,seven,eight,nine];
const ops = [add,sub,multi,div];

let calculation = '';
let operator = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    calculation += number.textContent;
    display.textContent = calculation;
  })
})
ops.forEach(op => {
  op.addEventListener('click', () => {
    operator = op.textContent;
    calculation += op.textContent;
    display.textContent = calculation;
  })
})