import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from RTK Quary
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl space-y-2 p-5">
        {todos?.data?.map((todo) => (
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
