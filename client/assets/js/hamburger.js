// Select the hamburger icon and header element
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on both the hamburger icon and header element
  hamburger.classList.toggle('active');
  header.classList.toggle('active');
});
