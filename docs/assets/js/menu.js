function loadHTML() {
  fetch("./././menu.html")
      .then(response => response.text())
	  console.log(text);
      
}
window.onload = loadHTML();