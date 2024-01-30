import { menuData } from './menuData.js'
import { contactForm } from './contactForm.js'
import { mobileMenu } from './utils.js'

const menu = [...menuData]
const smoothieBtn = document.getElementById('smoothie-btn')
const showSmoothie = document.getElementById('show-selection')
let menuItems = ''
let specialMenuItems = ''

// hamburger menu toggle
mobileMenu()


// // Setting random current specials - Never more than 4 at a time
for(let i = 0; i < 4; i++){
  let randomId = Math.floor(Math.random() * menu.length);
  for(let item of menu){
    if(randomId === item.id)
    item.isCurrentSpecial = true
  }
}


// Setting menu items
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
        <p>${item.price - 1}</p>
      </div>
    `
  }
  
}

document.getElementById('menu-group').innerHTML = menuItems
document.getElementById('specials-menu').innerHTML = specialMenuItems


// Smoothie Generator

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


// contact form validation
contactForm()