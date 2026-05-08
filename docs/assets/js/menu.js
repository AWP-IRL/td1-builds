function loadHTML() {
  fetch("./././menu.html")
      .then(response => response.text())
      .then(text => document.getElementById("menu-nav").innerHTML = text);
      
}
window.onload = loadHTML();