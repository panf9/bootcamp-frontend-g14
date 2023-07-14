const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function (event) {
    // Se ejecutará cuando se hace click en el boto añadir tares

    // const button = document.createElement('button')
    // button.innerText = 'Nuevo'

    // document.body.appendChild(button)

    const li = document.createElement('li')

    li.innerText = taskInput.value

    taskList.appendChild(li)

})