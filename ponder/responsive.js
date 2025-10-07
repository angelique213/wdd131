// Target the elements
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Add a click event to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the "hide" class on the nav
  nav.classList.toggle('hide');

  // Toggle the "change" class on the menu button (for the animation)
  menuButton.classList.toggle('change');
});
