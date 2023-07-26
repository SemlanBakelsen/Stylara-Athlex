function myFunction() {
  document.querySelector('.dropdown-menu').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
document.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});
