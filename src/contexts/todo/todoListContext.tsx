import { Dispatch, createContext } from "react";
import { Todo } from "../../api/todo/entities/Todo";

type TodoContextType = {
    todoList: Todo[];
    setTodoList: Dispatch<React.SetStateAction<Todo[]>>
}

export const todoListContext = createContext<TodoContextType | undefined>(
    undefined
);