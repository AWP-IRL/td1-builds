

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