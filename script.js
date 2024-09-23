window.onload = function () {
    const imageItems = document.querySelectorAll('.image-item');
    let currentIndex = 0;
    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches; // Adjust width as needed
    }
    function highlightImageItem() {
        if (isMobile()) {
            // Do nothing if mobile, stop the loop
            imageItems.forEach(item => item.classList.add('color'));
            return;
        }
        // Remove 'color' class from all image items
        imageItems.forEach(item => item.classList.remove('color'));

        // Add 'color' class to the current image item
        imageItems[currentIndex].classList.add('color');

        // Move to the next image item (or loop back to the first)
        currentIndex = (currentIndex + 1) % imageItems.length;

        // Schedule the next image item change
        setTimeout(highlightImageItem, 1400); // 1 second delay
    }

    // Start the cycle
    highlightImageItem();
};