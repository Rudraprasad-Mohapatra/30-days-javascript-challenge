// Initialize an empty cart array
let cart = [];

// Function to handle adding products to the cart
function addToCart(productId) {
  const product = products.find((prod) => prod.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    // If the product is already in the cart, increase the quantity
    cartItem.quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.push({ ...product, quantity: 1 });
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to handle increasing the quantity of a product in the cart
function increaseQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
    updateCartDisplay();
  }
}

// Function to handle decreasing the quantity of a product in the cart
function decreaseQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  } else if (cartItem && cartItem.quantity === 1) {
    removeFromCart(productId);
  }
  updateCartDisplay();
}

// Function to handle removing a product from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = ""; // Clear the cart display

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `<p>${item.name} - $${item.price.toFixed(
        2
      )} (x${item.quantity})</p>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>`;
      cartItemsContainer.appendChild(cartItemElement);
    });
  }
}

// Function to initialize product listing and attach event listeners
function initProductListing() {
  const productGrid = document.querySelector(".products-grid");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productGrid.appendChild(productItem);
  });
}

// Initialize the product listing on page load
window.onload = initProductListing;
