// import { preguntas } from './file.js'

const preguntas = [
    {
        "pregunta": "¿Cuál es un lenjuage interpretado?",
        "a": "C++",
        "b": "Java",
        "c": "Javascript",
        "rpta":"c"
    },
    {
        "pregunta": "¿Cuál es un lenjuage de programación?",
        "a": "Python",
        "b": "HTML",
        "c": "CSS",
        "rpta":"a",
    },
    {
        "pregunta": "¿Javascript es igual que Java?",
        "a": "Si",
        "b": "No",
        "c": "Depende",
        "rpta":"b"
    }
]

const par = document.querySelector('p')
const a = document.getElementById('a') 
const b = document.getElementById('b') 
const c = document.getElementById('c')
const buttonNext = document.getElementById('next')


let numPreg = 0
let puntaje = 0;

par.innerText = preguntas[numPreg].pregunta
a.innerText = preguntas[numPreg].a
b.innerText = preguntas[numPreg].b
c.innerText = preguntas[numPreg].c

const div = document.querySelector('div')


div.addEventListener('click', function (event) {
    // Event Delegation
    console.log(event.target.id);
    if (event.target.id === preguntas[numPreg].rpta) {
        console.log('respuesta correcta')
        puntaje += 10
        console.log(event.target.classList)
        event.target.classList = ["text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full border-2 border-green-400"]
        a.disabled = b.disabled = c.disabled = true
    } else if (event.target === div) {
        console.log('Click en el div');
    } else {
        console.log('Respuesta falsa');
        event.target.classList = ["text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full border-2 border-red-500"]
        a.disabled = b.disabled = c.disabled = true
    }
    // a.disabled = b.disabled = c.disabled = true

})

buttonNext.addEventListener('click', function (event) {
    numPreg++
    if (numPreg === preguntas.length - 1) {
        buttonNext.innerText = "¡Ver Resultado!"
    }
    if (numPreg === preguntas.length) {
        buttonNext.remove()
        a.remove()
        b.remove()
        c.remove()
        div.innerHTML = `<span>Tu puntaje final es ${puntaje}</span>`
    }
    a.classList = b.classList = c.classList = ['hover:relative p-0.5 mb-2 mr-2 overflow-hidden  hover:font-medium hover:text-gray-900 rounded-lg group hover:bg-gradient-to-br from-cyan-500 to-blue-500  group-hover:to-blue-500 hover:text-white dark:text-black w-full px-5 py-2.5 rounded-md border-2 border-sky-500 text-left']

    a.disabled = b.disabled = c.disabled = false
    par.innerText = preguntas[numPreg].pregunta
    a.innerText = preguntas[numPreg].a
    b.innerText = preguntas[numPreg].b
    c.innerText = preguntas[numPreg].c

})