import { Dispatch, SetStateAction, createContext } from "react";

import { CreateTodoDTO } from "../../api/todo/dtos/create-todo";

type TodoContextType = {
    createTodo: CreateTodoDTO;
    setCreateTodo: Dispatch<SetStateAction<CreateTodoDTO>>;
};

export const createTodoContext = createContext<TodoContextType | undefined>(
    undefined
);
