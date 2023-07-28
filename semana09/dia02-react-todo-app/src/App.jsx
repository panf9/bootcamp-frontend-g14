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
      <h1 className="text-6xl font-bold underline">
        TODO APP
      </h1>

      {/* {JSON.stringify(todos)} */}
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
