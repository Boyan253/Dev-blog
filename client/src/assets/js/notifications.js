// Get the "Subscribe" button element
const subscribeButton = document.querySelector('.sub-btn');

// Add click event listener to the button
subscribeButton.addEventListener('click', () => {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  
  // Display an alert with the entered email
  alert(`Subscribed with email: ${email}`);
});
