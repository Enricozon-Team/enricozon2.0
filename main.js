document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay (you can replace this with your actual loading logic)
  setTimeout(function () {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the main content
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Adjust the time as needed
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.paddingLeft = "20px";
  document.getElementById("mySidebar").style.transition = "0.5s";
  document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.paddingLeft = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}

function showText(text) {
  var contentDiv =
    document.getElementById("chi-siamo") ||
    document.getElementById("coming-soon");
  contentDiv.innerHTML = "<p>" + text + "</p>";
}

function filterProducts() {
  var input, filter, container, images, description, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  container = document.getElementsByClassName("content")[0];
  images = container.getElementsByClassName("image-container");

  for (i = 0; i < images.length; i++) {
    description = images[i].getElementsByClassName("image-description")[0];
    txtValue = description.textContent || description.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      images[i].style.display = "";
    } else {
      images[i].style.display = "none";
    }
  }
}

function playAudio() {
  var audio = document.getElementById("audioPlayer");
  audio.play();
}
function playAudio2() {
  var audio = document.getElementById("audioPlayer2");
  audio.play();
}
function playAudio3() {
  var audio = document.getElementById("audioPlayer3");
  audio.play();
}
