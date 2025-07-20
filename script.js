// Initialize counter variable
let counter = 0;

// Select DOM elements
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

// Add event listener to button
incrementBtn.addEventListener('click', () => {
  counter++; // Increment counter
  counterEl.textContent = counter; // Update counter display
});