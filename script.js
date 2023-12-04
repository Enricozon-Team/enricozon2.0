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