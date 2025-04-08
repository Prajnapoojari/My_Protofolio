document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulate message sending
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response-message").textContent = "Message sent successfully!";
        document.getElementById("response-message").classList.remove("error");
    } else {
        document.getElementById("response-message").textContent = "Message not sent. Please try again.";
        document.getElementById("response-message").classList.add("error");
    }
});
