
// Importamos el módulo file.js
import { preguntas } from './file.js'

const par = document.querySelector('p')
const a = document.getElementById('a') 
const b = document.getElementById('b') 
const c = document.getElementById('c')
const buttonNext = document.getElementById('next')
const ctx = document.getElementById('myChart');

let numPreg = 0
let puntaje = 0;
let selected = false

// buttonNext.disabled = true

par.innerText = preguntas[numPreg].pregunta
a.innerText = preguntas[numPreg].a
b.innerText = preguntas[numPreg].b
c.innerText = preguntas[numPreg].c

const div = document.querySelector('div')


div.addEventListener('click', function (event) {
    // Event Delegation
    console.log(event.target.id);
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
        console.log('Respuesta falsa');
        event.target.classList = ["text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full border-2 border-red-500"]
        a.disabled = b.disabled = c.disabled = true
        // buttonNext.disabled = false
        selected = true
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
    if (numPreg === preguntas.length - 1) {
        buttonNext.innerText = "¡Ver Resultado!"
    }
    if (numPreg === preguntas.length) {
        Swal.fire({
            title: 'Por favor ingrese su nombre',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            }
        })

        buttonNext.remove()
        a.remove()
        b.remove()
        c.remove()

        div.innerHTML = `<span>Tu puntaje final es ${puntaje}</span>`

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // new Chart(ctx, {
        //     type: 'pie',
        //     data: data,
        //     options: {
        //         responsive: true,
        //         plugins: {
        //         legend: {
        //             position: 'top',
        //         },
        //         title: {
        //             display: true,
        //             text: 'Chart.js Pie Chart'
        //         }
        //         }
        //     },
        // });
    }
    a.classList = b.classList = c.classList = ['hover:relative p-0.5 mb-2 mr-2 overflow-hidden  hover:font-medium hover:text-gray-900 rounded-lg group hover:bg-gradient-to-br from-cyan-500 to-blue-500  group-hover:to-blue-500 hover:text-white dark:text-black w-full px-5 py-2.5 rounded-md border-2 border-sky-500 text-left']

    a.disabled = b.disabled = c.disabled = false
    par.innerText = preguntas[numPreg].pregunta
    a.innerText = preguntas[numPreg].a
    b.innerText = preguntas[numPreg].b
    c.innerText = preguntas[numPreg].c
    
    selected = false
})