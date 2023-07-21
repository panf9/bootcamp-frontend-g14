
// Importamos el módulo file.js
import { preguntas } from './file.js'

const par = document.querySelector('p')
const a = document.getElementById('a') 
const b = document.getElementById('b') 
const c = document.getElementById('c')
const buttonNext = document.getElementById('next')
const mainNew = document.getElementById('mainNew')
const section = document.getElementById('section')
const playAgainButton = document.querySelector('#playAgain')

let numPreg = 0
let puntaje = 0
let selected = false
let nombre = ''

// buttonNext.disabled = true

par.innerText = preguntas[numPreg].pregunta
a.innerText = preguntas[numPreg].a
b.innerText = preguntas[numPreg].b
c.innerText = preguntas[numPreg].c

const div = document.querySelector('div')


div.addEventListener('click', function (event) {
    // Event Delegation
    // console.log(event.target.id);
    if (event.target.id === preguntas[numPreg].rpta) {
        // console.log('respuesta correcta')
        puntaje += 10
        // console.log(event.target.classList)
        event.target.classList = ["text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full border-2 border-green-400"]
        a.disabled = b.disabled = c.disabled = true
        // buttonNext.disabled = false
        selected = true

    } else if (event.target === div) {
        console.log('Click en el div');
    } else {
        // console.log('Respuesta falsa');
        event.target.classList = ["text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full border-2 border-red-500"]
        a.disabled = b.disabled = c.disabled = true
        // buttonNext.disabled = false
        selected = true
    }

    if (numPreg === (preguntas.length - 1) && selected) {
        buttonNext.innerText = "¡Ver Resultado!"
    }
})

buttonNext.addEventListener('click', function (event) {

    if (selected === false) {
        Swal.fire({
            title: 'Oops..',
            text: 'Para continuar debes de elegir una opción',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
        return
    }

    numPreg++
    
    if (numPreg === preguntas.length) {
        // Swal.fire({
        //     title: 'Por favor, ingrese su nombre',
        //     input: 'text',
        //     inputAttributes: {
        //         autocapitalize: 'on'
        //     }
        // })

        // buttonNext.remove()
        // a.remove()
        // b.remove()
        // c.remove()
        // console.log('ocultamos la section')
        // console.log(section);
        // section.forEach(e => e.style.visibility = "hidden")
        // buttonNext.style.visibility = "hidden"
        // a.style.visibility = "hidden"
        // b.style.visibility = "hidden"
        // c.style.visibility = "hidden"
        // par.style.visibility = "hidden"
        // section.style.visibility = "hidden"
        section.remove()

        
        const spanNew = document.querySelector('#span')
        spanNew.innerText = `${nombre}, tu puntaje final es ${puntaje} de ${10 * preguntas.length}`

        // const canva = document.createElement('canvas')
        // canva.setAttribute('id', 'myChart')
        // canva.setAttribute('width', '480px')
        // canva.setAttribute('height', '480px')
        // console.log(canva);
        // mainNew.appendChild(canva)

        const divNew = document.querySelector('.divEnd')

        divNew.setAttribute('width', '480px')
        divNew.setAttribute('height', '480px')

        divNew.innerHTML = '<canvas id="myChart"></canvas>' + 
                            '<button id="playAgain" class="text-black bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg text-sm px-5 py-2.5 inline-flex items-center">¡Volver a jugar!</button>'

        const ctx = document.getElementById('myChart')
        console.log(mainNew);

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Inorrectas', 'Correctas'],
                datasets: [{
                    label: 'Puntos ',
                    data: [10 * preguntas.length - puntaje, puntaje],
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
                    borderWidth: 0.8
                }]
            },
        });
    }
    a.classList = b.classList = c.classList = ['hover:relative p-0.5 mb-2 mr-2 overflow-hidden  hover:font-medium hover:text-gray-900 rounded-lg group hover:bg-gradient-to-br from-cyan-500 to-blue-500  group-hover:to-blue-500 hover:text-white dark:text-black w-full px-5 py-2.5 rounded-md border-2 border-sky-500 text-left']

    a.disabled = b.disabled = c.disabled = false
    par.innerText = preguntas[numPreg].pregunta
    a.innerText = preguntas[numPreg].a
    b.innerText = preguntas[numPreg].b
    c.innerText = preguntas[numPreg].c
    
    selected = false
})

document.addEventListener('DOMContentLoaded', function () {

    Swal.fire({
        title: 'Por favor, ingresa tu nombre',
        input: 'text',
        showLoaderOnConfirm: true,
        confirmButtonText: 'Continuar',
        // showCancelButton: true,
        // cancelButtonText: 'Salir',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        inputValidator: response => {
            
            if (!response) {
                return "¡Por favor, ingresa tu nombre!"    
            } else {
                return undefined
            }
        } 
    })
    .then(result => {
        if (result.value) {
            nombre = result.value
        }
    })
} )