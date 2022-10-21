let height = document.getElementById(`input-height`)
let weight = document.getElementById(`input-weight`)
let boton = document.getElementById(`boton`)
let resultado = document.getElementById(`resultado`)

function calcularMasaCorporal(pesoIngresado,alturaIngresado){
    resultadoCorporal = weight/(height*height)
    return resultadoCorporal
}

boton.addEventListener('click', e =>{
    let totalCorporal;
    weight = weight.value;
    height = height.value;
    totalCorporal = calcularMasaCorporal(weight,height);
    resultado.innerHTML = totalCorporal;
})