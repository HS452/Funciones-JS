/* FUNCION ORIGINAL
function pintar () {
    Element.style.backgroundColor = 'yellow'
    
}

const ele = document.getElementById( "ele1")
ele.addEventListener("click", pintar); 
*/


// Moficando la Funcion- pasarle un color como argumento a la funcion pintar//
function pintar (elemento, color = 'green'){
    elemento.style.backgroundColor = color ;

}
//Al hacer click el parrafo pase a amarillo//
const ele = document.getElementById ('ele1');
ele.addEventListener('click', function () {
pintar (ele, 'yellow')
}); 

/*Probando funcion
console.log ('ele1')
*/