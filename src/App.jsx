import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function addTodo() {
    // todos.push(text)
    setTodos([...todos, text])
    setText('')
  }

  function removeTodo(indextoRemove) {
    /* todos.splice(indextoRemove, 1);
    setTodos([...todos]); */
    const newTodos = todos.filter((todo, idx) => idx != indextoRemove);
    setTodos(newTodos)
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo();
  }

  return (
    <main className="w-full min-h-screen">
      <form className="flex flex-row gap-2 justify-center p-5" onSubmit={onSubmit}>
        <input
          type="text"
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          placeholder="Ingrese una tarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button
          className="bg-white  text-black px-3 rounded ">Agregar +</button>
      </form>
      <div className="max-w-screen-sm w-full mx-auto flex flex-col gap-1">
        {todos.length === 0 && (<p className="text-white">No hay tareas pendientes</p>)}
        {
          todos.map((todo, idx) => {
            return <div className="text-white select-none bg-white/10 rounded flex flex-row justify-between p-4" key={idx}>
              <span>{todo}</span>
              <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 items-center text-center " onClick={()=>removeTodo(idx)}>X</span>
            </div>
          })
        }
      </div>
    </main>
  )
}

export default App
