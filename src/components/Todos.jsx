import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
const dispatch = useDispatch()
  console.log(todos);
  return (
    <div>
      <h1 className="text-center text-3xl my-5">Todos</h1>

      {todos.map((todo)=> (
        <div key={todo.id} className="flex gap-20 my-5 justify-between items-center">
        <li className="list-none text-xl">{todo.text}</li>
        <button onClick={()=>dispatch(removeTodo(todo.id))} className="bg-red-400 px-3 rounded-md">X</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
