// Get all elements for interaction
const decreaseButtons = document.getElementsByClassName("decrease-btn");
const increaseButtons = document.getElementsByClassName("increase-btn");
const deleteButtons = document.getElementsByClassName("delete-btn");
const heartButtons = document.getElementsByClassName("heart-btn");
const itemQuantities = document.getElementsByClassName("item-quantity");
const itemPrices = document.getElementsByClassName("item-price");
const totalPriceElement = document.getElementById("totalPrice");

// Add event listeners to the elements
for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener("click", () => decreaseQuantity(i));
}

for (let i = 0; i < increaseButtons.length; i++) {
  increaseButtons[i].addEventListener("click", () => increaseQuantity(i));
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", () => deleteItem(i));
}

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", () => toggleLike(i));
}

// Function to decrease the quantity of an item
function decreaseQuantity(index) {
  let quantity = parseInt(itemQuantities[index].textContent);
  if (quantity > 1) {
    quantity--;
    itemQuantities[index].textContent = quantity;
    updateTotalPrice();
  }
}

// Function to increase the quantity of an item
function increaseQuantity(index) {
  let quantity = parseInt(itemQuantities[index].textContent);
  quantity++;
  itemQuantities[index].textContent = quantity;
  updateTotalPrice();
}

// Function to delete an item from the cart
function deleteItem(index) {
  const cartItem = deleteButtons[index].closest(".cart-item");
  cartItem.remove();
  updateTotalPrice();
}

// Function to toggle the like status of an item
function toggleLike(index) {
  heartButtons[index].classList.toggle("favorite");
}

// Function to update the total price based on quantity and deletions
function updateTotalPrice() {
  let totalPrice = 0;

  for (let i = 0; i < itemQuantities.length; i++) {
    const price = parseFloat(itemPrices[i].textContent);
    const quantity = parseInt(itemQuantities[i].textContent);
    totalPrice += price * quantity;
  }

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Update the total price initially
updateTotalPrice();
