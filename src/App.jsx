import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-6 font-semibold text-zinc-600">Learn about redux and redux-toolkit </h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
