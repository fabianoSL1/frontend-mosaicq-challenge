import { createContext } from "react";

import { CreateTodoDTO } from "../../api/todo/dtos/create-todo";

type TodoContextType = {
    createTodo: CreateTodoDTO;
    setCreateTodo: (createTodo: CreateTodoDTO) => void;
};

export const createTodoContext = createContext<TodoContextType | undefined>(
    undefined
);
