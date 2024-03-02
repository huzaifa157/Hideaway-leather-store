let cart = document.querySelector('#added');
let subTotals = document.querySelector('#subTotals');
let total = document.querySelector('#total');
let customerEmail;

cart.innerHTML = localStorage.getItem('dataOfCart0');

subTotals.innerHTML = '$' + localStorage.getItem('subTotals');
total.innerHTML = '$' + (parseInt(localStorage.getItem('subTotals')) + 12);


function checkout() {
    if(subTotals.innerHTML !== '$0') {
        customerEmail = prompt("Enter your Email:");
        while(!(/@gmail\.com$/.test(customerEmail))){
            customerEmail = prompt("You must write your Email correctly:");
        }

        let el;

        el= `
        <section class="section-p1">
            <h3>${customerEmail}</h3>
            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead class="thead">
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Size</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.innerHTML}
                    </tbody>
                </table>
            </section>
        
            <section id="card-add" class="section-p1">
                <div>
                    <table>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${total.innerHTML}</strong></td>
                        </tr>
                    </table>
                    <button class="normall" onclick="remove(this);">Order Completed</button>
                </div>
            </section>

        </section>
        <hr>
        `;

        if (localStorage.getItem('dataOfDashboard') === null || localStorage.getItem('dataOfDashboard') === ' ') {
            localStorage.setItem('dataOfDashboard', el);
        } else {
            localStorage.setItem('dataOfDashboard', localStorage.getItem('dataOfDashboard')+ el);
        }

        localStorage.setItem('dataOfCart0', ' ');
        localStorage.setItem('subTotals', 0);
        cart.remove();
        subTotals.innerHTML = '$0';
        total.innerHTML = '$0';
    } else {
        alert("Buy some product to checkout");
    }
}