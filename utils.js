import { menuData } from "./menuData.js";

const menu = [...menuData]


// Mobile hamburger menu logic
function mobileMenu(){
  const toggleButton = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');

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

// Smoothie Generator logic
function smoothieGenerator(){
  const smoothieBtn = document.getElementById('smoothie-btn')
  const showSmoothie = document.getElementById('show-selection')

  smoothieBtn.addEventListener('click', () =>{
    let selection = Math.floor(Math.random() * menu.length);
    if(menu[selection].isCurrentSpecial){
      showSmoothie.innerText = `Try '${menu[selection].item}' you'll love it!
      $${menu[selection].price - 1}`
    }else{
      showSmoothie.innerText = `Try '${menu[selection].item}' you'll love it!
      $${menu[selection].price}`
    }
  })
}


export { mobileMenu, smoothieGenerator }

