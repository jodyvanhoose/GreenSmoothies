import { menu } from './menu.js'
import { contactForm } from './contactForm.js'

// hamburger menu toggle
const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

function closeMenu(){
  navbarLinks.classList.toggle('active');
}


// Setting menu items
let menuItems = ''
let specialMenuItems = ''

for(let item of menu){
  if(!item.isCurrentSpecial){
    menuItems += `
      <div class="menu-group">
        <div class="menu-item">
          <h3>${item.item}</h3>
          <p>${item.description}</p>
        </div>
        <p>${item.price}</p>
      </div>
    `
  }else{
    specialMenuItems += `
      <div class="menu-group">
        <div class="menu-item">
          <h3>${item.item}</h3>
          <p>${item.description}</p>
        </div>
        <p>${item.price}</p>
      </div>
    `
  }
  
}

document.getElementById('menu-group').innerHTML = menuItems
document.getElementById('specials-menu').innerHTML = specialMenuItems


// Smoothie Generator
const smoothieBtn = document.getElementById('smoothie-btn');
const showSmoothie = document.getElementById('show-selection');

smoothieBtn.addEventListener('click', () =>{
  let selection = Math.floor(Math.random() * menu.length);
  showSmoothie.innerText = `Try '${menu[selection].item}' you'll love it!
  $${menu[selection].price}`;
});


// contact form validation
contactForm()