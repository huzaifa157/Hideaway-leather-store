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
