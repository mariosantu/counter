// Data
let add = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let num = document.getElementById('number');

// Default settings
num.innerHTML= 0;
add.innerHTML = '+';
decrement.innerHTML = '-';
reset.innerHTML = 'reset';


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

