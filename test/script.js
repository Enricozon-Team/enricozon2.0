document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay (you can replace this with your actual loading logic)
  setTimeout(function () {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the main content
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Adjust the time as needed
});
