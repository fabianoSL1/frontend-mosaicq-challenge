import { useContext } from "react";

import { createTodoContext } from "../contexts/todo/createTodoContext";

export function useCreateTodo() {
    const context = useContext(createTodoContext);

    if (!context) {
        throw new Error("create todo context not load")
    }

    return context;
}