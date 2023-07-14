
let numeroActual = '0';
let operador = '';
let operando = '';


const inputDisplay = document.querySelector('.display');
// console.log(inputDisplay);

const buttons = document.querySelectorAll('button')
// console.log(buttons);

buttons.forEach(function(button){

    button.addEventListener('click', function (event) {
        const buttonText = event.target.textContent;
        console.log(buttonText);

        if ('+-*'.includes(buttonText)){
            // Operaciones matemáticas
            operador = buttonText;
            operando = Number(numeroActual);

        } else if ( buttonText === '=') {
            // Aquñi realizo las operaciones matemáticas 
            
        }

        inputDisplay.value = buttonText;
    })
})