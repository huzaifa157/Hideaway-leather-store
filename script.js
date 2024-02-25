const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=> { 
        nav.classList.add('active');

    })
}
if (close) {
    close.addEventListener('click', ()=> { 
        nav.classList.remove('active');

    })
}





// cart 

const product = [
   {
       id: 0,
       image: 'image/product/shop-product (1).jpg',
       title: 'Black Leather Jacket',
       price: 120,
   },
   {
       id: 1,
       image: 'image/product/shop-product (2).jpg',
       title: 'Womans Brown Leather Jacket',
       price: 60,
   },
   {
       id: 2,
       image: 'image/product/shop-product (3).jpg',
       title: 'Brown Leather Jacket',
       price: 230,
   },
   {
       id: 3,
       image: 'image/product/shop-product (4).jpg',
       title: 'Black Leather Jacket',
       price: 100,
   }
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
const shop = document.getElementById("prepend");

const add = document.getElementById("add");
add.addEventListener("click", function(event) {
    event.preventDefault();

    //input
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const fileInput = document.getElementById('file').value;
    // const file = fileInput.files[0];
  
    // const reader = new FileReader();
  
    // reader.onload = function(event) {
    //   const contents = event.target.result;
    //   displayContents(contents);
    // };
  
    // reader.onerror = function() {
    //   console.error('Error reading the file');
    // };
  
    // reader.readAsText(file);

    let el = document.createElement("div");
    el.setAttribute("class", "pro");
    el.innerHTML = `<a href="products.html">${fileInput}</a>
    <div class="des">
        <span>Hideaway</span>
        <h5>${name}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>

        </div>
        <h4>${price}</h4>
    </div>
    <a href="products.html"><i class="fa fa-shopping-cart cart"></i></a>`

    adding(el);
    
})

  function displayContents(contents) {
    const element = document.getElementById('fileContents');
    element.textContent = contents;
  }

  function adding(el){
    shop.prepend(el);
  }
