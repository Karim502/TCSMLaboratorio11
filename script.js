const formulario = document.getElementById('login-form');
const inputCorreo = document.getElementById('correo');
const inputPassword = document.getElementById('password');
const mensajeError = document.getElementById('mensaje-error');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    
    // Limpiar mensaje anterior
    mensajeError.textContent = '';
    mensajeError.style.color = 'red';

    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();

    // Validación básica que Carla deberá mejorar
    if (correo === '' || password === '') {
        mensajeError.textContent = 'Faltan datos por ingresar.';
        return;
    }

    mensajeError.style.color = 'green';
    mensajeError.textContent = 'Iniciando sesión...';
});