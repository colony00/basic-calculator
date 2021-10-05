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
let result = false;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if(result) calculation = ''
    if(!(calculation)) {
      if(number.textContent != '0') {
        calculation += number.textContent;
        display.textContent = calculation;
      }
    } else {
      calculation += number.textContent;
      display.textContent = calculation;
    }
  })
});

ops.forEach(op => {
  op.addEventListener('click', () => {
    if(!(op.classList.contains('unavailable')) && calculation){
      operator = op.textContent;
      calculation += op.textContent;
      result = false;
      display.textContent = calculation;
      //makes unavailable to enter again
      ops.forEach(elem =>{
        elem.classList.add('unavailable');
      })
    }
  })
});

equal.addEventListener('click', () => {
  let numbers = calculation.split(/\D/g);
  if(numbers.length == 2 && typeof(+numbers[1])=='number' && !(isNaN(Number(numbers[1])))) {
    display.textContent = operate(numbers[0],operator,numbers[1])
    calculation = display.textContent;
    operator = '';
    result = true;
    ops.forEach(elem =>{
      elem.classList.remove('unavailable');
    })
}})

let clearing = false;
clear.addEventListener('click', () => {
  if (clearing) {
    calculation = '';
    operator = '';
    result = false;
    display.textContent = '0';
    ops.forEach(elem =>{
      elem.classList.remove('unavailable');
    })
    clearing = false;
  } else {
    clearing = true;
  }
})