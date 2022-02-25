const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

