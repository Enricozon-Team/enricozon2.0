if (localStorage.getItem("cookiesAccepted") !== "true") {
  document.getElementById("cookie-popup").style.display = "block";
}

function accettaCookie() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-popup").style.display = "none";
}

function rifiutaCookie() {
  document.getElementById("cookie-popup").style.display = "none";
}

function vaiAllaPaginaInfo() {
  window.location.href = "cookies.html";
}
