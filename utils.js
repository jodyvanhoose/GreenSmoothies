export function mobileMenu(){
  const toggleButton = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

function closeMenu(){
  navbarLinks.classList.toggle('active');
}
}