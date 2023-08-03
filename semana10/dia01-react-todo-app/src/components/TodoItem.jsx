
const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  return (
    <li
      key={todo.id}
      className="
            text-sky-600 
            bg-sky-200 
            p-2 
            rounded-md           
            flex
            justify-between"
    >
      <input 
        type="checkbox" 
        className="mr-4" 
        data-id={todo.id} 
        checked={todo.completed} 
        onChange={onCompleted}
      />
      <span 
        className={`w-full  ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.title}
      </span>
      <button className="bg-red-200  w-12 border rounded-md p-1  h-9" 
              data-id={todo.id} 
              onClick={onRemoveTodo}
      >
        ✂️
      </button>
    </li>
  )
}

export default TodoItem