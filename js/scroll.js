// JavaScript to enable click-and-drag scrolling
let isMouseDown = false;
let startX;
let scrollLeft;

// Get all elements with class 'scrolling-wrapper'
const scrollingWrappers = document.querySelectorAll('.scrolling-wrapper');

// Loop through each scrolling wrapper element
scrollingWrappers.forEach(scrollingWrapper => {
    scrollingWrapper.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        scrollingWrapper.style.cursor = 'grabbing';
        startX = e.pageX - scrollingWrapper.offsetLeft;
        scrollLeft = scrollingWrapper.scrollLeft;
    });

    scrollingWrapper.addEventListener('mouseleave', () => {
        isMouseDown = false;
        scrollingWrapper.style.cursor = 'grab';
    });

    scrollingWrapper.addEventListener('mouseup', () => {
        isMouseDown = false;
        scrollingWrapper.style.cursor = 'grab';
    });

    scrollingWrapper.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollingWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        scrollingWrapper.scrollLeft = scrollLeft - walk;
    });
});

// Prevent text selection while dragging
document.addEventListener('selectstart', function (e) {
    if (isMouseDown) {
        e.preventDefault();
    }
});