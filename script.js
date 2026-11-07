const formulario = document.getElementById('login-form');
const inputCorreo = document.getElementById('correo');
const inputPassword = document.getElementById('password');
const mensajeError = document.getElementById('mensaje-error');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que se envíe el formulario si hay errores
    
    // Limpiar mensaje anterior
    mensajeError.textContent = '';
    mensajeError.style.color = 'red';

    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();

    // Validar formato de correo mediante una expresión regular básica
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        mensajeError.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return;
    }

    // Validar que la contraseña tenga mínimo 8 caracteres
    if (password.length < 8) {
        mensajeError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        return;
    }

    // Si todo está correcto
    mensajeError.style.color = 'green';
    mensajeError.textContent = 'Iniciando sesión...';
});