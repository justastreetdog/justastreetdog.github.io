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

function copyFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("0xc85099424A5004a6c4b28fd1101E9cbEedb4dafe");

    // Alert the copied text
    //alertTimeout("Copied Ca", 1000)
  }
  function alertTimeout(mymsg, mymsecs) {
    var myelement = document.createElement("div");
    myelement.setAttribute("style", "background-color: blue;color:white; width: 200px;height: 80px;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 4px solid black;font-family:arial;font-size:35px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 20px;");
    myelement.innerHTML = mymsg;
    setTimeout(function () {
      myelement.parentNode.removeChild(myelement);
    }, mymsecs);
    document.body.appendChild(myelement);
  }