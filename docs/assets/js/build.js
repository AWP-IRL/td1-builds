var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

function loadHTML() {  
    // Target div where content will be inserted  
    const container = document.getElementById('menu-nav');  
 
    // Fetch the external HTML file  
    fetch('https://awp-irl.github.io/td1-builds/menu.html')  
        .then(response => {  
            // Check if the request succeeded (status 200-299)  
            if (!response.ok) {  
                throw new Error(`HTTP error! Status: ${response.status}`);  
            }  
            // Convert response to text (HTML string)  
            return response.text();  
        })  
        .then(html => {  
            // Insert the HTML into the container  
            container.innerHTML = html;  
        })  
        .catch(error => {  
            // Handle errors (e.g., file not found, network issues)  
            container.innerHTML = `<p>Error loading content: ${error.message}</p>`;  
        });  
}  

window.onload = loadHTML();