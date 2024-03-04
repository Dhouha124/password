function passworrd() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.style.backgroundImage = "url('eye-off-icon.png')";
    } else {
        passwordInput.type = 'password';
        toggleIcon.style.backgroundImage = "url('eye-icon.png')";
    }
}

function submitForm() {
   
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('E-mail:', email);
    console.log('Mot de passe:', password);
}
