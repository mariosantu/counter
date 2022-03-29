//html counter
//container
const container = document.getElementById('container');

//number
let divNum = document.createElement('div');
divNum.textContent = 0;
divNum.id = 'number';
container.appendChild(divNum);

//button increment
let buttonIncrement = document.createElement('button');
buttonIncrement.textContent = '+';
buttonIncrement.id = 'increment';
container.appendChild(buttonIncrement);

//button reset
let buttonReset = document.createElement('button');
buttonReset.textContent = 'reset';
buttonReset.id = 'reset';
container.appendChild(buttonReset);

//button decrement
let buttonDecrement = document.createElement('button');
buttonDecrement.textContent = '-';
buttonDecrement.id = 'decrement';
container.appendChild(buttonDecrement);

// Data
let add = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let num = document.getElementById('number');


// Events
add.addEventListener('click', function() {
    num.innerHTML++;
});

decrement.addEventListener('click', function() {
    num.innerHTML--;
});

reset.addEventListener('click', function() {
    num.innerHTML = 0;
});

