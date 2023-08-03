const Stats = ({ todos, onRemoveCompleted }) => {
  return (
    <div className="w-full flex justify-between">
      <span>{todos.filter(todo => todo.completed===true).length}/{todos.length}</span>
      <button 
      className="bg-fuchsia-400 rounded text-white p-2" 
      onClick={onRemoveCompleted}
      >
      Borrar completados
      </button>
    </div>
  )
}

export default Stats