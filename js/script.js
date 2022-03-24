let add = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let num = document.getElementById('number');

add.addEventListener('click', function() {
    num.innerHTML++;
});

decrement.addEventListener('click', function() {
    num.innerHTML--;
});
