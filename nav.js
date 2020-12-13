// Navigation -----
const btn = document.querySelector('.secondary-nav-container');
const nav = document.querySelector('.secondary-nav');

btn.addEventListener('click', function(e) {
    e.preventDefault;
    nav.classList.toggle('secondary-nav-show');
    
    e.target.classList.toggle('active');
});
