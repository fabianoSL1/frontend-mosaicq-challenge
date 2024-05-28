import { ReactNode } from "react";
import { CreateTodoProvider } from "./createTodoProvider";
import { TodoListProvider } from "./todoListProvider";

export function TodoProvider({ children }: { children: ReactNode }) {
    return (
        <TodoListProvider>
            <CreateTodoProvider>{children}</CreateTodoProvider>
        </TodoListProvider>
    );
}
