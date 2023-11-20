import { Todo } from "./todo";
import { useEffect } from "react";
import { TodoItem } from "../../model/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/slices/todo-slice";
import { RootState} from "../../redux/store";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todoListData: TodoItem[] = useSelector((state: RootState) => state.todoList.data);

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  return (
    <div>
      {todoListData
        .map(todo =>
          <Todo
            key={todo.id}
            data={todo}
          />
        )}
    </div>
  );
}