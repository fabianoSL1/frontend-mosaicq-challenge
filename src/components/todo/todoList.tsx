import { useMemo } from "react";
import { TodoStatus } from "../../api/todo/entities/todoStatus";
import { TodoItem } from "./todoItem";
import { todoService } from "../../api/todo/todoService";
import { useTodoList } from "../../hooks/useTodoList";

type Props = {
    statusList: TodoStatus[];
};

export function TodoList({ statusList }: Props) {
    const {todoList, setTodoList} = useTodoList()

    const visibles = useMemo(() => {
        if (statusList.length != 0) {
            return todoList.filter((todo) => statusList.includes(todo.status));
        }

        return todoList;
    }, [todoList, statusList]);

    async function deleteTodo(todoId: number) {
        await todoService.delete(todoId)
        setTodoList(current => current.filter(todo => todo.id != todoId))
    }

    return (
        <div className="mt-3 flex flex-col gap-4 flex-grow px-4">
            {visibles.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}
