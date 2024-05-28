import { useContext } from "react";
import { todoListContext } from "../contexts/todo/todoListContext";

export function useTodoList() {
    const context = useContext(todoListContext);

    if (!context) {
        throw new Error("todo list context not load")
    }

    return context;
}