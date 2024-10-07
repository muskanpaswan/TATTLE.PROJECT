let hamburger = document.querySelector(".hamburger")
let navbar = document.querySelector(".navbar")
let sizelogo= document.querySelector(".sizelogo")
hamburger.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});
