// Variable global para guardar el color
let color = '';

document.addEventListener('keydown', function (event) {
    // Cambiar color del div con id "key" según la tecla presionada
    if (event.key === 'a') {
        color = 'pink';
        document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'skyblue';
        document.getElementById('key').style.backgroundColor = color;
    }

    // Crear un nuevo div con color específico según la tecla presionada
    if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});

function crearDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '2px solid black';
    document.getElementById('container').appendChild(nuevoDiv);
}
