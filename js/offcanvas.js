// Use Bootstrap's event handling and methods to toggle offcanvas position
var offcanvasElement = document.getElementById('offcanvasExample');


function handleScreenSizeChange(mq) {
    if (mq.matches) {
        // Larger screens: Toggle to offcanvas at end
        offcanvasElement.classList.remove('offcanvas-bottom');
        offcanvasElement.classList.add('offcanvas-end', 'custom-offcanvas');
    } else {
        // Smaller screens: Toggle to offcanvas at start
        offcanvasElement.classList.remove('offcanvas-end', 'custom-offcanvas');
        offcanvasElement.classList.add('offcanvas-bottom');
    }
}

// Initial check on page load
var mq = window.matchMedia('(min-width: 768px)');
handleScreenSizeChange(mq);

// Event listener for screen size change
mq.addListener(handleScreenSizeChange);