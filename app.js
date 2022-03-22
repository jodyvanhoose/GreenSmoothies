

// hamburger menu toggle

const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

function closeMenu(){
  navbarLinks.classList.toggle('active');
}




// Smoothie Generator

let menuItems = [
  {item: 'Spinach Special', price: 5.59},
  {item: 'Banana Bomber', price: 5.99},
  {item: 'The Appalachian', price: 6.59},
  {item: 'Avocado Action', price: 5.99},
  {item: 'Columbia Gold', price: 7.99},
  {item: 'Big Blue Madness', price: 5.59},
  {item: 'Strawberry Smash', price: 4.99},
  {item: 'Mixed Berry Banaza', price: 4.99},
  {item: 'Mango Madness', price: 4.99},
  {item: 'Mint Cucumber', price: 4.99}
];

const smoothieBtn = document.getElementById('smoothie-btn');
const showSmoothie = document.getElementById('show-selection');

smoothieBtn.addEventListener('click', () =>{
  let selection = Math.floor(Math.random() * menuItems.length);
  showSmoothie.innerText = `Try '${menuItems[selection].item}' you'll love it!
  $${menuItems[selection].price}`;
});




// form validation/submit button success


const submitBtn = document.querySelector('#submit');
const firstCheck = document.querySelector('#first-check');
const firstX = document.querySelector('#first-x');
const lastCheck = document.querySelector('#last-check');
const lastX = document.querySelector('#last-x');
const emailCheck = document.querySelector('#email-check');
const emailX = document.querySelector('#email-x');


const fName = document.querySelector('input');

fName.addEventListener('input', () =>{
  fName.setCustomValidity('');
  fName.checkValidity();
  console.log(fName.checkValidity());
  if(fName.validity.valid == true){
    fName.style.borderColor = '#26Ad1a';
    firstCheck.style.display = 'inline';
    firstX.style.display = 'none';
  }
});


fName.addEventListener('invalid', () => {
  fName.setCustomValidity('My smoothie has a first name...');
  fName.style.borderColor = 'red';
  firstX.style.display = 'inline';
  firstCheck.style.display = 'none';
});

const lastName = document.querySelector('#last-name');

lastName.addEventListener('input', () =>{
  lastName.setCustomValidity('');
  lastName.checkValidity();
  console.log(lastName.checkValidity());
  if(lastName.validity.valid == true){
    lastName.style.borderColor = '#26Ad1a';
    lastCheck.style.display = 'inline';
    lastX.style.display = 'none';
  }
});

lastName.addEventListener('invalid', () => {
  lastName.setCustomValidity('My smoothie has a second name...');
  lastName.style.borderColor = 'red';
  lastX.style.display = 'inline';
  lastCheck.style.display = 'none';
});

const email = document.querySelector('#email');

email.addEventListener('input', () =>{
  email.setCustomValidity('');
  email.checkValidity();
  console.log(email.checkValidity());
  if(email.validity.valid == true){
    email.style.borderColor = '#26Ad1a';
    emailCheck.style.display = 'inline';
    emailX.style.display = 'none';
    submitBtn.addEventListener('click', () => {
      submitBtn.textContent = 'Submitted';
    });
  }
});


email.addEventListener('invalid', () => {
  email.setCustomValidity(`You can't get awesome smoothie coupons without a valid email address`);
  email.style.borderColor = 'red';
  emailX.style.display = 'inline';
  emailCheck.style.display = 'none';
});

