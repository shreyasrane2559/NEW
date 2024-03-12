document.getElementById("myButton").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/button-clicked","http://localhost:3000/"); // Replace with your server's actual address
    // ... rest of your code
// Use the correct route defined in your server.js
    xhr.onload = function() {
      if (xhr.status === 200) {
        const serverResponse = xhr.responseText;
        console.log("Server response:", serverResponse);
        document.getElementById("message").textContent = serverResponse;
        // You can add additional logic here based on the response
        if (serverResponse === "Button clicked received!") {
          document.getElementById("myButton").disabled = true; // Disable button after click
        }
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.send();
  });
  