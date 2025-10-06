// Assuming you have a cart stored in localStorage or in a variable
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to check if there are items in the cart
function checkCart() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (cart.length > 0) {
        // Show the checkout button if there are items in the cart
        checkoutBtn.style.display = 'block';
    } else {
        // Hide the checkout button if the cart is empty
        checkoutBtn.style.display = 'none';
    }
}

// Example: Function to add an item to the cart (this will be called when you add an item to the cart)
function addItemToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    checkCart(); // Update checkout button visibility
}

// Initially check if the checkout button should be visible when the page loads
checkCart();
