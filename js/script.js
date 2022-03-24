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

