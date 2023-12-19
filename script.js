function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3 and 5 seconds
    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds

    document.body.appendChild(snowflake);

    // Remove the snowflake when the animation is complete
    snowflake.onanimationend = () => {
        snowflake.remove();
    };
}

// Function to create multiple snowflakes
function createSnowfall() {
    const numSnowflakes = 7; // Number of snowflakes to generate
    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }
}

// Generate snowfall every second
setInterval(createSnowfall, 2000);



document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('gift-box');
  
    // Function to show the gift box
    function showGiftBox() {
      giftBox.style.display = 'block';
  
      // Set a timeout to hide the gift box after 2 seconds
      setTimeout(function() {
        giftBox.style.display = 'none';
      }, 2000);
    }
  
    // Event listener for when the user clicks on the page
    document.addEventListener('click', function(event) {
      // Show the gift box at the clicked position
      giftBox.style.left = `${event.clientX}px`;
      giftBox.style.top = `${event.clientY}px`;
  
      showGiftBox();
    });
  });
  