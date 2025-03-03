// Login functionality
function login() {
    let username = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let storedUsername = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'index.html'; // Redirect to dashboard page
    } else {
        alert("Invalid credentials");
    }

    return false
}
