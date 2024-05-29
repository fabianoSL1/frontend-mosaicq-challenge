import { Todo } from "../../api/todo/entities/Todo";

type Props = {
    todo: Todo;
    deleteTodo: (todoId: number) => Promise<void>;
};

export function TodoItem({ todo, deleteTodo }: Props) {
    return (
        <div className="p-4 rounded-lg bg-white shadow-lg ring-1 ring-black/20">
            <div className="flex flex-col h-full justify-between">
                <div className="flex align-middle justify-between">
                    <div>
                        <h2 className="text-2xl text-gray-900">{todo.title}</h2>
                        <p className="text-gray-900">{todo.describe}</p>
                    </div>
                    <div className="border-b-4 h-fit">
                        <p>{todo.status}</p>
                    </div>
                </div>

                <div className="mt-8 grid divide-x border-t grid-cols-2">
                    <button className="pt-2">Edit</button>
                    <button className="pt-2 text-red-500" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
