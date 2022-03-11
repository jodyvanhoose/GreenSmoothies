// hamburger toggle

const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  });


function closeMenu(){
  navbarLinks.classList.toggle('active');
}







// submit button success

const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  submitBtn.innerText = 'Submitted!';
});