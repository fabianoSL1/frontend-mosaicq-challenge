import { useMemo } from "react";
import { Todo } from "../../api/todo/entities/Todo";
import { TodoStatus } from "../../api/todo/entities/todoStatus";
import { TodoItem } from "./todoItem";
import { todoService } from "../../api/todo/todoService";
import { useTodoList } from "../../hooks/useTodoList";

type Props = {
    status?: TodoStatus;
};

export function TodoList({ status }: Props) {
    const {todoList, setTodoList} = useTodoList()

    const visibles = useMemo(() => {
        if (status) {
            return todoList.filter((todo) => todo.status === status);
        }

        return todoList;
    }, [todoList, status]);

    async function deleteTodo(todoId: number) {
        await todoService.delete(todoId)
        setTodoList(current => current.filter(todo => todo.id != todoId))
    }

    return (
        <div className="mt-12 flex flex-col gap-4 flex-grow">
            {visibles.map((todo) => (
                <TodoItem todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}
