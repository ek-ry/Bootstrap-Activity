function Login() {
    var username = document.getElementById('username').value;

    if (username.includes('@')) {
        var newPage = 'home.html';
        window.location.href = newPage;
        return false; 
    } else {
        alert("Username must include '@'");
        return false; 
    }
}
