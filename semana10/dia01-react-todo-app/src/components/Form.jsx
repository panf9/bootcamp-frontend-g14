import { useState } from "react"

const Form = ({ onSubmit }) => {
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

      // props.onSubmit(newTodo)
      // Usamos destructuring en la Form = ({ onSubmit })
      onSubmit(newTodo)

      setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                className="w-full border my-3 p-3" 
                placeholder="¿Qué deseas hacer hoy?"
                value = {input}
                onChange={handleChange}
            />
        </form>
    )
}

export default Form