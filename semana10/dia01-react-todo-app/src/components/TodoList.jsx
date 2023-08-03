import TodoItem from "./TodoItem.jsx"

const TodoList = ({ todos, onCompleted, onRemoveTodo}) => {
  return (
    <ul className="flex flex-col gap-3">
      {todos.map(todo => (
      
      <TodoItem
        key={todo.id}
        todo={todo}
        onCompleted={onCompleted}
        onRemoveTodo={onRemoveTodo}
      />

      ))}
    </ul>
  )
}

export default TodoList