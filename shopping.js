//   // opening product details :~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

function openDetails(shopDiv) {

    localStorage.setItem('key1', shopDiv.querySelector('img').getAttribute('src'));
    localStorage.setItem('key2', shopDiv.querySelector('.des h5').innerText);
    localStorage.setItem('key3', shopDiv.querySelector('.des h4').innerText);

    window.location.href = "product.html";
}

let imgSrc = document.getElementById('mainimg');
let prodName = document.querySelector('.singledetails h4');
let price = document.querySelector('.singledetails h2');
let productQuantity = document.querySelector('.singledetails input');
let selectElement = document.getElementById("sizeSelect");
let selectedSize, selectedQuantity, subTotal, subTotalString;


imgSrc.src = localStorage.getItem('key1');
prodName.innerText = localStorage.getItem('key2');
price.innerText = localStorage.getItem('key3');


selectedSize = selectElement.value;
selectElement.addEventListener("change", function() {

    selectedSize = selectElement.value;
    
});


selectedQuantity = productQuantity.value;
productQuantity.addEventListener("change", function() {

    selectedQuantity = productQuantity.value;
    
});



function addToCart() {

    subTotal = parseFloat(price.innerText.replace('$', '')) * parseInt(selectedQuantity);
    subTotalString = '$' + subTotal.toFixed(2);

    localStorage.setItem('key4', imgSrc.src);
    localStorage.setItem('key5', prodName.innerText);
    localStorage.setItem('key6', selectedSize);
    localStorage.setItem('key7', selectedQuantity);
    localStorage.setItem('key8', subTotalString);

    let el;

    el= `
    <tr>
        <td><i id="remove" class="far fa-times-circle"></i></td>
        <td><img src="${localStorage.getItem('key4')}" width="60px " alt="img"></td>
        <td>${localStorage.getItem('key5')}</td>
        <td>${localStorage.getItem('key6')}</td>
        <td><input type="number" value="${localStorage.getItem('key7')}" class="cartinp"></td>
        <td>${localStorage.getItem('key8')}</td>
    </tr>
    `;

    if (localStorage.getItem('dataOfCart0') === null || localStorage.getItem('dataOfCart0') === ' ') {
        localStorage.setItem('dataOfCart0', el);
        localStorage.setItem('subTotals', subTotal);
    } else {
        localStorage.setItem('dataOfCart0', localStorage.getItem('dataOfCart0')+ el);
        localStorage.setItem('subTotals', parseInt(localStorage.getItem('subTotals')) + subTotal);

    }
    

    alert(`${prodName.innerText} is added to the cart`);
    window.location.href = "cart.html";
}

// if(true) {
    
// }

// // Create HTML elements
// const el = document.createElement("td");
// el.setAttribute("class", "pro");
// el.innerHTML = `
//     <a href="products.html">
//         <img src="${productData.image}" alt="Product Image">
//     </a>
//     <div class="des">
//         <span>Hideaway</span>
//         <h5>${productData.name}</h5>
//         <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//         </div>
//         <h4>${productData.price}</h4>
//     </div>
//     <a href="products.html"><i class="fa fa-shopping-cart cart"></i></a>
// `;

// // Add element to the DOM
// adding(el);

// <tr>
//     <td><i id="remove" class="far fa-times-circle"></i></td>
//     <td><img src="product image/women purse 3.png" width="60px " alt="img"></td>
//     <td>Leather Purse</td>
//     <td>Medium</td>
//     <td><input type="number" value="1" class="cartinp"></td>
//     <td>$97</td>
// </tr>