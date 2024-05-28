import { ReactNode, useEffect, useState } from "react";

import { createTodoContext } from "./createTodoContext";
import { CreateTodoDTO } from "../../api/todo/dtos/create-todo";

export function CreateTodoProvider({ children }: { children: ReactNode }) {
    const [createTodo, set] = useState<CreateTodoDTO>({
        describe: "",
        title: "",
    });
    
    const  setCreateTodo = (createTodo: CreateTodoDTO) => {
        localStorage.setItem("create-todo", JSON.stringify(createTodo));
        set(createTodo);
    }

    useEffect(() => {
        const stored = localStorage.getItem("create-todo")

        if (stored) {
            try {
                setCreateTodo(JSON.parse(stored))
            } catch {
                localStorage.removeItem("create-todo")
            }
        }
    }, []);

    

    return (
        <createTodoContext.Provider value={{ createTodo, setCreateTodo }}>
            {children}
        </createTodoContext.Provider>
    );
}
