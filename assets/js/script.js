const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Close the dropdown menu when a menu item is clicked
const menuItems = document.querySelectorAll('.dropdown-menu ul li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });
});

// Close the dropdown menu when clicking outside the menu
document.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});
