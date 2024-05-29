import { SubmitHandler, useForm } from "react-hook-form";
import { Todo } from "../../api/todo/entities/Todo";
import { TodoStatus } from "../../api/todo/entities/todoStatus";
import { UpdateTodoDTO } from "../../api/todo/dtos/update-todo";
import { todoService } from "../../api/todo/todoService";
import { useTodoList } from "../../hooks/useTodoList";
import { InputErrors } from "../InputErrors";

type Props = {
    open: boolean;
    setOpen: (status: boolean) => void;
    todo?: Todo;
};

export function EditTodoModal({ open, setOpen, todo }: Props) {
    const methods = useForm<UpdateTodoDTO>({
        values: todo,
    });

    const { setTodoList } = useTodoList();

    if (!open || !todo) {
        return <></>;
    }

    const onSubmit: SubmitHandler<UpdateTodoDTO> = async (data) => {
        const updated = await todoService.update(todo.id, data);

        setTodoList((current) => {
            const index = current.findIndex((item) => item.id == todo.id);

            current[index] = updated;
            return current;
        });

        setOpen(false);
    };

    return (
        <div className="absolute min-h-screen w-full top-0 left-0 backdrop-blur-[1px] bg-black/20 grid place-items-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-black/15 shadow-sm">
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <InputErrors errors={methods.formState.errors}/>
                    
                    <div>
                        <label className="pl-2">Title</label>
                        <input
                            className="p-2 w-full rounded-md border-2 border-gray-200 outline-indigo-600"
                            type="text"
                            {...methods.register("title", {
                                required: true,
                                minLength: 1,
                                maxLength: 255,
                            })}
                        ></input>
                    </div>
                    <div>
                        <label className="pl-2">Describe</label>
                        <textarea
                            className="p-2 w-full rounded-md border-2 border-gray-200 outline-indigo-600"
                            {...methods.register("describe", {
                                required: true,
                                minLength: 1,
                                maxLength: 255,
                            })}
                        ></textarea>
                    </div>

                    <div className="flex flex-col">
                        <label className="pl-2">Status</label>
                        <select
                            className="p-2 rounded-md"
                            {...methods.register("status", { required: true })}
                        >
                            {Object.values(TodoStatus).map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 divide-x">
                        <button className="p-2">Save</button>
                        <button className="p-2" onClick={() => setOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
