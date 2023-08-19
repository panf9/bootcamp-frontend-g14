import { useState } from "react"
import Header from './components/Header.jsx'
import Form from "./components/Form.jsx"
import Stats from "./components/Stats.jsx"
import TodoList from "./components/TodoList.jsx"


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

  // TODO: Añadir persistencia a este TODO APP para que las tareas esten siempre visible
  const [todos, setTodos] = useState(DEFAULT_TODOS)



  const handleSubmit = (newTodo) => {
      setTodos([... todos, newTodo])
  }

  const handleCompleted = (event) => {
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
        <Header title="TODO APP"/>

        <Form onSubmit={handleSubmit} />

        {/* <pre>*{input}*</pre> */}
        <Stats
          todos={todos}
          onRemoveCompleted={handleRemoveCompleted}
        />
        <section className="mt-5">
        {/* {JSON.stringify(todos)} */}
          <TodoList 
            todos={todos}
            onCompleted={handleCompleted}
            onRemoveTodo={handleRemoveTodo}
          />
        </section>
      </main>
    </>
  )
}

export default App
