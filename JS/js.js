
/*----------------------------------------------------------FUNCIONES-----------------------------------------------------*/


function validateUsername(username) {
    // Verificar longitud
    if (username.length < 8 || username.length > 15) {
        alert('El nombre de usuario debe contener entre 8 y 15 caracteres');
        return false;
    }

    // Verificar espacios
    if (/\s/.test(username)) {
        alert('El nombre de usuario no debe contener espacios');
        return false;
    }

    // Verificar que no inicie con un número o carácter especial
    const firstChar = username[0];
    if (/\d/.test(firstChar) || /[\W_]/.test(firstChar)) {
        alert('El nombre de usuario no debe iniciar con numero o caracter especial');
        return false;
    }

    return true;
}


// Función para validar la contraseña
function validatePassword(password) {


    password = password.trim();

    // Verificar longitud
    if (password.length < 12 || password.length > 20) {
        alert('La contraseña de usuario debe contener entre 12 y 20 caracteres');
        return false;
    }

    // Verificar letra en mayúscula
    if (!/[A-Z]/.test(password)) {
        alert('La contraseña de usuario debe contener almenos una letra mayuscula');
        return false;
    }

    // Verificar letra en minúscula
    if (!/[a-z]/.test(password)) {
        alert('La contraseña de usuario debe contener almenos una letra minuscula');
        return false;
    }

    // Verificar un número
    if (!/\d/.test(password)) {
        alert('La contraseña de usuario debe contener almenos un numero');
        return false;
    }

    // Verificar un carácter especial
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        alert('La contraseña de usuario debe contener almenos un caracter especial');
        return false;
    }
    // Verificar espacios
    if (/\s/.test(password)) {
        alert('La contraseña de usuario no debe contener espacios');
        return false;
    }

    return true;
}

function registry() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (!validateUsername(username)) {

    } else if (!validatePassword(password)) {

    } else {

        localStorage.setItem(username, trim.password);
        window.location.href = 'index.html'
    }



}
function login() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username || !password) {
        alert('Debe ingresar nombre de usuario y contraseña')
    }

    let sPassword = localStorage.getItem(username)
    if (!sPassword) {
        alert('!Upss¡ no te hemos encontrado, valida tu usuario o registrate');
    } else if (password === sPassword) {
        window.location.href="index.html";
        alert('Bienvenid@ ' + username + ' acabas de iniciar sesion exitosamente');
    } else {
        alert('Por favor valida tus datos');

    }
    console.log(sPassword)



}
