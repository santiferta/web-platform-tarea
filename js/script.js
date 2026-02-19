
console.log("Santiago");


const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();
    
    alert("¡Datos enviados correctamente!");
});