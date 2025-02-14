//--------------------------- Product Data
const products = [
    { name: "Fuzzy Flower", price: 500, image: "images/fuzzy_flower.jpg" },
    { name: "Paper Flower", price: 300, image: "images/paper_flower.jpg" },
    { name: "Crochet Flower", price: 450, image: "images/crochet_flower.jpg" }
  ];
  
  
  //--------------------------- DOM Elements
  const productList = document.getElementById("product-list");
  const cartDiv = document.getElementById("cart");
  const totalPriceSpan = document.getElementById("total-price");
  const darkModeSlider = document.getElementById("dark-mode-slider");
  const modeText = document.getElementById("mode-text");
  
  //--------------------------- Cart Array
  let cart = [];
  
  // Function to render products
  function renderProducts() {
    products.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
  
      //--------------------------- Add transition effect
      setTimeout(() => {
        productDiv.classList.add("visible");
      }, index * 200); //---------- Delay each product's appearance
    });
  }
  
  //--------------------------- Function to add a product to the cart
  function addToCart(index) {
    const product = products[index];
    cart.push(product);
    updateCartDisplay();
  }
  
  //--------------------------- Function to update the cart display
  function updateCartDisplay() {
    // Clear the cart display
    cartDiv.innerHTML = "";
  
    //--------------------------- Add each item in the cart to the display
    let totalPrice = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
      `;
      cartDiv.appendChild(cartItem);
      totalPrice += item.price;
    });
  
    //--------------------------- Update the total price
    totalPriceSpan.textContent = totalPrice;
  }
  
  //--------------------------- Dark Mode Toggle
  darkModeSlider.addEventListener("change", () => {
    document.body.setAttribute("data-theme", darkModeSlider.checked ? "dark" : "light");
    modeText.textContent = darkModeSlider.checked ? "Dark Mode" : "Light Mode";
  });
  
  //---------------------------Render products on page load
  renderProducts();