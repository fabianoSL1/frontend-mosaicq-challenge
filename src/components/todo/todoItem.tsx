
import { Todo } from "../../api/todo/entities/Todo";

type Props = {
    todo: Todo;
};

export function TodoItem({ todo }: Props) {
    

    return (
        <form className="p-4 min-w-32 rounded-lg border-2 border-indigo-300 cursor-pointer">
            
                <div>
                    <h2 className="text-2xl text-gray-900">{todo.title}</h2>
                    <p className="text-gray-900">{todo.describe}</p>
                    <p className="mt-4">{todo.status}</p>
                </div>
                    
        </form>
    );
}
