import { ReactNode, useState } from "react";
import { Todo } from "../../api/todo/entities/Todo";
import { todoListContext } from "./todoListContext";

export function TodoListProvider({ children }: { children: ReactNode }) {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    return (
        <todoListContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </todoListContext.Provider>
    );
}
