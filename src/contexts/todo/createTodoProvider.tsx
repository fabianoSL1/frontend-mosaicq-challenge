import { ReactNode, useState } from "react";

import { createTodoContext } from "./createTodoContext";
import { CreateTodoDTO } from "../../api/todo/dtos/create-todo";

export function CreateTodoProvider({ children }: { children: ReactNode }) {
    const [createTodo, setCreateTodo] = useState<CreateTodoDTO>({
        describe: "",
        title: "",
    });

    return (
        <createTodoContext.Provider value={{ createTodo, setCreateTodo }}>
            {children}
        </createTodoContext.Provider>
    );
}