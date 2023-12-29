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


// main.js

// Funzione per creare le particelle di confetti
function createConfetti() {
  const confettiContainer = document.getElementById('fireworks-container');

  // Numero di particelle da generare
  const numberOfParticles = 50;

  for (let i = 0; i < numberOfParticles; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = 'blue'; // Colore blu
    confettiContainer.appendChild(confetti);

    // Imposta la posizione iniziale e la velocità delle particelle
    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    confetti.style.left = initialX + 'px';
    confetti.style.top = initialY + 'px';

    const speed = 1 + Math.random() * 3; // Velocità casuale
    const angle = Math.random() * 360; // Angolo casuale
    const radians = (angle * Math.PI) / 180;
    const velocityX = speed * Math.cos(radians);
    const velocityY = speed * Math.sin(radians);

    // Animazione delle particelle
    function animateConfetti() {
      confetti.style.left = parseFloat(confetti.style.left) + velocityX + 'px';
      confetti.style.top = parseFloat(confetti.style.top) + velocityY + 'px';

      if (
        parseFloat(confetti.style.top) > window.innerHeight ||
        parseFloat(confetti.style.left) > window.innerWidth
      ) {
        // Rimuovi la particella quando esce dalla finestra
        confetti.remove();
      } else {
        requestAnimationFrame(animateConfetti);
      }
    }

    animateConfetti();
  }
}

// Aggiungi l'evento click al bottone
const confettiButton = document.getElementById('confetti-button');
confettiButton.addEventListener('click', createConfetti);
