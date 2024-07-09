var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: false,
    wrap: false
});

var carouselElement = document.getElementById('carouselExampleIndicators');
var levelHeading = document.getElementById('levelHeading');
var prevButton = document.getElementById('carouselPrev');
var nextButton = document.getElementById('carouselNext');
var levels = ['Level 1', 'Level 2', 'Level 3'];

function updateCarouselControls() {
    var activeIndex = Array.prototype.indexOf.call(carouselElement.querySelectorAll('.carousel-item'), carouselElement.querySelector('.carousel-item.active'));
    prevButton.style.display = activeIndex === 0 ? 'none' : 'block';
    nextButton.style.display = activeIndex === levels.length - 1 ? 'none' : 'block';
}

carouselElement.addEventListener('slid.bs.carousel', function (event) {
    var activeIndex = event.to;
    levelHeading.style.opacity = 0;
    // Instantly change the level number
    levelHeading.style.opacity = 0;
    levelHeading.textContent = levels[activeIndex];
    levelHeading.style.opacity = 1;
    updateCarouselControls();

});

// Initialize carousel controls on page load
updateCarouselControls();