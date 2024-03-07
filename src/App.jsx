import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <>
    <div className="flex flex-col justify-center items-center mt-20">
      <h1>Learn about redux and redux-toolkit </h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
