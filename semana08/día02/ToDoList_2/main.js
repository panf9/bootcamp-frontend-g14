const taskInpunt = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')

const tasks = []

taskInpunt.addEventListener('keypress', function (event) {

    if (event.key === 'Enter') {
        const value = event.target.value
        // console.log(value);

        tasks.push(value)

        taskInpunt.value = ''

        renderTask()

    }
})

function renderTask () {
    let lista = ''

    tasks.forEach( function (task) {
        lista = lista + `
        <li>
            <input type="checkbox" onclick="checkTarea()">
            <span>${task}</span>
            <button>Borrar</button>
        </li>
        `
    })
    taskList.innerHTML = lista
}

function checkTarea (event) {
    console.log(event);
    // const target = event.target
    // if( target.tagName === 'INPUT' && target.type === 'checkbox'){
    //     target.classList.toggle('checked')
    // }

}