import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
    </div>
  );
};

export default Todos;
