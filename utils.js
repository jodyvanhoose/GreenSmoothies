function mobileMenu(){
  const toggleButton = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');

  console.log(toggleButton)
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });


  document.addEventListener('DOMContentLoaded', function () {
    // Get all anchor elements inside the navbar
    const navbarLinks = document.getElementById('navbar-links')
    const anchorElements = navbarLinks.getElementsByTagName('a')
  
    // Add a click event listener to each anchor element
    for (let i = 0; i < anchorElements.length; i++) {
      anchorElements[i].addEventListener('click', function () {
        const navbarLinks = document.getElementById('navbar-links')
        navbarLinks.classList.toggle('active')
      });
    }
  });
}


export { mobileMenu }

