let cart = document.querySelector('#added');
let subTotals = document.querySelector('#subTotals');
let total = document.querySelector('#total');
let = customerEmail;

cart.innerHTML = localStorage.getItem('dataOfCart0');

subTotals.innerHTML = '$' + localStorage.getItem('subTotals');
total.innerHTML = '$' + (parseInt(localStorage.getItem('subTotals')) + 12);


function checkout() {
    customerEmail = prompt("Enter your Email:");
    while(!(/@gmail\.com$/.test(customerEmail))){
        customerEmail = prompt("You must write your Email correctly:");
    }
    localStorage.setItem('dataOfCart0', ' ');
    localStorage.setItem('subTotals', 0);
    cart.remove();
    subTotals.innerHTML = '$0';
    total.innerHTML = '$0';
}
