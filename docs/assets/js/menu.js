function loadHTML() {
  fetch("./././menu.html")
      .then(response => response.text())
	  console.log(response.text());
      
}
window.onload = loadHTML();