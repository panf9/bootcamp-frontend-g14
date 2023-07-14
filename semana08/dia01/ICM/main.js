const buttonCalcular = document.getElementById('calcular')
const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const divResultado = document.getElementById('resultado')

// console.log(inputPeso);

// inputPeso.addEventListener('input', function (event){
//     // console.log('Peso ingresado');
//     console.log(event.target.value);

//     const peso = event.target.value;
// })


buttonCalcular.addEventListener('click', function(event){
    const peso = inputPeso.value;
    const altura = inputAltura.value;
    console.log(peso, altura);

    const indiceDeMasaCorporal = peso * 10000 / altura ** 2
    console.log(indiceDeMasaCorporal);

    if (indiceDeMasaCorporal < 18.5){
        resultado = 'Baja';
    } else if(indiceDeMasaCorporal < 24.9){
        resultado = 'Normal';
    } else if(indiceDeMasaCorporal > 29.9){
        resultado = 'Sobrepeso';
    } else if (indiceDeMasaCorporal > 30){
        resultado = 'Obeso'
    }else{
        resultado = 'Datos incorrectos'
    }

    divResultado.innerText = 'Tu Indice de Masa Corporal es ' + resultado; 
})
