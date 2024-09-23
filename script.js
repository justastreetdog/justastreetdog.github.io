// Create a new Audio object
const audio = new Audio('audio.mp3'); // Replace with the path to your audio file
// Set the audio to loop
audio.loop = true;

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

// Function to play the audio
function playAudioLoop() {
    audio.play();
}

function enterWebsite() {
    document.getElementById('entryModal').style.display = 'none'; // Hide the modal
    document.getElementById('mainContent').style.display = 'block'; // Show the main content
    playAudioLoop();
}