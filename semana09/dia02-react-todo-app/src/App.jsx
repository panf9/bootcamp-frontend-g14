import { useState } from "react"

function App() {
  const DEFAULT_TODOS = [
    {
      "userId": 1,
      "id": "1",
      "title": "delectus aut autem",
      "completed": false
      },
      {
      "userId": 1,
      "id": "2",
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "userId": 1,
      "id": "3",
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "userId": 1,
      "id": "4",
      "title": "et porro tempora",
      "completed": true
      },
      {
      "userId": 1,
      "id": "5",
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
      }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')


  const handleChange = (event) => {
    const value = event.target.value 
    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if ( input === ''){
      return
    }

    const newTodo = {
        // "id": todos.length + 1,
        "id": crypto.randomUUID(), // es una forma de crear ID únicos
        "title": input,
        "completed": false
      }

      setTodos([... todos, newTodo])

      setInput('')
    
  }

  const handleComplete = (event) => {
    const isChecked = event.target.checked
    const idSelected = event.target.dataset.id 

    console.log(isChecked, idSelected);
    const newTodos = todos.map(todo => {
      if (todo.id === idSelected) 
        return { ... todo, completed:isChecked }
      
      return todo
    })
    console.log(newTodos);
    setTodos(newTodos)
  }

  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id 
    // console.log(todos);
    // console.log(idSelected);
    const newTodos = todos.filter(todo => todo.id !== idSelected)
    // console.log(newTodos);
    setTodos(newTodos)
  }

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter( todo => todo.completed === false)

    setTodos(newTodos)
  }
  

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-400 p-4 shadow-sm">
        <h1 className="text-2xl font-bold ">
          TODO APP
        </h1>

        <form onSubmit={handleSubmit}>
          <input type="text" 
            className="w-full border my-3 p-3" 
            placeholder="¿Qué deseas hacer hoy?"
            value = {input}
            onChange={handleChange}
          />
        </form>
        {/* <pre>*{input}*</pre> */}
        <div className="w-full flex justify-between">
          <span>{todos.filter(todo => todo.completed===true).length}/{todos.length}</span>
          <button 
            className="bg-fuchsia-400 rounded text-white p-2" 
            onClick={handleRemoveCompleted}
          >
            Borrar completados
          </button>
        </div>
        <section className="mt-5">
        {/* {JSON.stringify(todos)} */}
        <ul className="flex flex-col gap-3">
          {todos.map(todo => (<li
            key={todo.id}
            className="
                  text-sky-600 
                  bg-sky-200 
                  p-2 
                  rounded-md           
                  flex
                  justify-between"
          >
            <input type="checkbox" className="mr-4"data-id={todo.id} checked={todo.completed} onChange={handleComplete}/>
            <span className={`w-full  ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
            <button className="bg-red-200  w-12 border rounded-md p-1  h-9" 
                    data-id={todo.id} 
                    onClick={handleRemoveTodo}
            >
              ✂️
            </button>
          </li>
          ))}
        </ul>
        </section>
      </main>
    </>
  )
}

export default App
