const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function (event) {
    // Se ejecutará cuando se hace click en el boto añadir tares

    // const button = document.createElement('button')
    // button.innerText = 'Nuevo'

    // document.body.appendChild(button)

    if (taskInput.value === ''){
        alert('Escriba una tarea')
        return
    }

    const li = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)
    console.log(checkbox);

    let span = document.createElement('span')
    span.innerText = taskInput.value
    li.appendChild(span)
    console.log(span);

    let buttonBorrar = document.createElement('button')
    buttonBorrar.innerText = 'Borrar'
    li.appendChild(buttonBorrar)

    // li.innerText = taskInput.value

    taskList.appendChild(li)

    taskInput.value = ''

})


taskList.addEventListener('click', function (event) {
    console.log(event);
    const target = event.target

    if( target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('checked')
    }

    if ( target.tagName === 'BUTTON' ) {
        target.parentElement.remove()
    }
})