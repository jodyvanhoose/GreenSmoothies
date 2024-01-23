export function contactForm(){
  
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

const lName = document.querySelector('#last-name');

lName.addEventListener('input', () =>{
  lName.setCustomValidity('');
  lName.checkValidity();
  console.log(lName.checkValidity());
  if(lName.validity.valid == true){
    lName.style.borderColor = '#26Ad1a';
    lastCheck.style.display = 'inline';
    lastX.style.display = 'none';
  }
});

lName.addEventListener('invalid', () => {
  lName.setCustomValidity('My smoothie has a second name...');
  lName.style.borderColor = 'red';
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

  // submit button success

    submitBtn.addEventListener('click', () => {
      submitBtn.textContent = 'Submitted';

      // Outputs form info to console
      console.log(`
      First Name: ${fName.value}
      Last Name: ${lName.value}
      Email: ${email.value}`);
    });
  }
});


email.addEventListener('invalid', () => {
  email.setCustomValidity(`You can't get awesome smoothie coupons without a valid email address`);
  email.style.borderColor = 'red';
  emailX.style.display = 'inline';
  emailCheck.style.display = 'none';
});

}
