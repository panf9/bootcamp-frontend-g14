import { useState } from "react"

function App() {
  const DEFAULT_TODOS = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
      },
      {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
      },
      {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
      }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  
  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-400 p-4 shadow-sm">
        <h1 className="text-2xl font-bold ">
          TODO APP
        </h1>
        <input type="text" 
          className="w-full border my-3 p-3" 
          placeholder="¿Qué deseas hacer hoy?"
        />

        <section className="mt-5">
        {/* {JSON.stringify(todos)} */}
        <ul className="flex flex-col gap-3">
          {todos.map(todo => {
            return (<li 
                key={todo.id} 
                className={`
                  text-sky-600 
                  bg-sky-200 
                  p-2 
                  rounded-md 
                  ${todo.completed? 'line-through':''}`} 
              >
                <input type="checkbox" className="mr-4"/>
                  <span>{todo.title}</span>
              </li>
            )
          })}
        </ul>
        </section>
      </main>
    </>
  )
}

export default App
