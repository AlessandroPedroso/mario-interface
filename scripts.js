/*
    Funções é um trecho de código que é executado apenas quando for chamado
*/

const form = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');

function formularioContato() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"; 
}

function escondeFormulario() {
    
    form.style.left = "-300px";
    form.style.transform = "none";
    mascara.style.visibility = 'hidden';
}

mascara.addEventListener('click', escondeFormulario)