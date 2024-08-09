// Load cart data from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display the cart details in the order summary
function displayOrderSummary() {
    const summaryElement = document.getElementById('summary');
    if (cart.length === 0) {
        summaryElement.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    
    const orderDetails = cart.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('<br>');
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    
    summaryElement.innerHTML = `
        ${orderDetails}<br>
        <strong>Total Amount: $${totalAmount}</strong>
    `;
}

// Handle form submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate the checkout process and display confirmation message
    const confirmationMessage = `
        Thank you for your purchase, ${name}!<br>
        Your order has been placed and will be shipped to:<br>
        ${address}<br><br>
        Order Details:<br>
        ${cart.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('<br>')}<br><br>
        Total Amount: $${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
    `;

    localStorage.removeItem('cart'); // Clear cart data
    document.querySelector('.checkout').innerHTML = `<h2>Order Confirmation</h2><p>${confirmationMessage}</p>`;
});

// Display the order summary on page load
window.onload = displayOrderSummary;
