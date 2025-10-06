let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let backButton = document.getElementById('back');

let unAcceppClick;

// Helper function to shift carousel items
const shiftItems = (type) => {
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
    } else {
        listHTML.prepend(items[items.length - 1]);
    }
};

// Function to show next/prev slider
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    shiftItems(type);
    carousel.classList.add(type);

    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1500); // Match CSS animation duration
};

// Event listeners for next/prev buttons
nextButton.onclick = () => showSlider('next');
prevButton.onclick = () => showSlider('prev');

// Event delegation for "See More" buttons
carousel.addEventListener('click', (event) => {
    if (event.target.classList.contains('seeMore')) {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});

// Event listener for "Back" button
if (backButton) {
    backButton.onclick = () => {
        carousel.classList.remove('showDetail');
    };
}
