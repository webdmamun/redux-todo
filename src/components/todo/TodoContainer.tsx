import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl space-y-2 p-5">
        {todos.map((todo) => (
          <TodoCard {...todo} />
        ))}
        <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-semibold ">
          <p>There is no task pending</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
