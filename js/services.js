let lastScrollTop = 0;
let currentSlide = 0;

const navbar = document.getElementById('navbar');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;

    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

function showSlide(index, direction) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.left = direction === 'left' ? '-100%' : '100%'; // Reset position
    });

    // Ensure the index is within bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Add active class to the new current slide and set correct direction
    slides[currentSlide].style.left = '0'; // Bring into view
    slides[currentSlide].classList.add('active');
}

// Change slide with manual control
function changeSlide(direction) {
    const slideDirection = direction === 1 ? 'right' : 'left';
    showSlide(currentSlide + direction, slideDirection);
}

let slideInterval = setInterval(() => {
     changeSlide(1); // Automatically change slide every 5s
}, 5000);

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide2 = 0;
    const slides2 = document.querySelectorAll('.slide2');

    function showSlide2(index) {
        // Ensure index stays within bounds
        if (index >= slides2.length) {
            currentSlide2 = 0; // Loop back to the start
        } else if (index < 0) {
            currentSlide2 = slides2.length - 1; // Loop to the last slide
        } else {
            currentSlide2 = index;
        }

        // Hide all slides
        slides2.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the current slide
        slides2[currentSlide2].classList.add('active');
    }

    function changeSlide2(direction) {
        showSlide2(currentSlide2 + direction);
    }

    // Initial call to show the first slide
    showSlide2(currentSlide2);

    // Assign event handlers for buttons
    document.querySelector('.prev2').addEventListener('click', () => changeSlide2(-1));
    document.querySelector('.next2').addEventListener('click', () => changeSlide2(1));
});
