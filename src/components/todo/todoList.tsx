import { useMemo } from "react";
import { Todo } from "../../api/todo/entities/Todo";
import { TodoStatus } from "../../api/todo/entities/todoStatus";
import { TodoItem } from "./todoItem";

type Props = {
    todos: Todo[];
    status?: TodoStatus;
};
export function TodoList({ todos, status }: Props) {
    const visibles = useMemo(() => {
        if (status) {
            return todos.filter((todo) => todo.status === status);
        }

        return todos;
    }, [todos, status]);

    return (
        <div className="mt-12 flex flex-wrap justify-center gap-4">
            {visibles.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </div>
    );
}
