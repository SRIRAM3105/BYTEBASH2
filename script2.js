function showWelcomeMessage() {
    var name = prompt("Enter your name");
    if (name) {
        var confirmation = confirm(`Welcome, ${name}! Would you like to proceed to BYTE BASH?`);
        if (confirmation) {
            window.location.href = "http://127.0.0.1:5500/confirmation/index2.html"; 
        } else {
            window.close();
        }
    }
}
showWelcomeMessage();

