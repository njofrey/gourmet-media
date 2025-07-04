console.log("Menú cargado.");
// Aquí podríamos agregar la lógica para el botón "Ver detalles"
document.querySelectorAll('.plato button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Mostrando más detalles del plato. ¡Próximamente!");
    });
});