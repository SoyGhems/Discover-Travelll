document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-fondo');
    const iconoVolumen = document.getElementById('icono-volumen');

    // Controlar el volumen
    iconoVolumen.addEventListener('click', () => {
        video.muted = !video.muted; // Alternar mute
        iconoVolumen.classList.toggle('fa-volume-high', !video.muted);
        iconoVolumen.classList.toggle('fa-volume-xmark', video.muted);
    });

    const formSuscripcion = document.getElementById('form-suscripcion');
    const mensajeSuscripcion = document.getElementById('mensaje-suscripcion');

    // Manejo del formulario de suscripción
    formSuscripcion.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener datos del formulario de suscripción
        const nombre = document.getElementById('nombre-suscripcion').value;
        const genero = document.getElementById('genero-suscripcion').value;
        const correo = document.getElementById('correo-suscripcion').value;

        // Guardar datos en la consola
        console.log('Nombre:', nombre);
        console.log('Género:', genero);
        console.log('Correo electrónico:', correo);

        // Reemplazar el formulario de suscripción con el mensaje de confirmación
        formSuscripcion.style.display = 'none';
        mensajeSuscripcion.style.display = 'block';
    });
});
