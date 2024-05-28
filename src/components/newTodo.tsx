import { useCreateTodo } from "../hooks/useCreateTodo";
import { todoService } from "../api/todo/todoService";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTodoDTO } from "../api/todo/dtos/create-todo";

export function NewTodoForm() {
    const { createTodo, setCreateTodo } = useCreateTodo();

    const { register, handleSubmit, getValues } = useForm({
        values: createTodo,
    });

    const onSubmit: SubmitHandler<CreateTodoDTO> = async (data) => {
        await todoService.create(data);
        setCreateTodo({
            title: "",
            describe: "",
        });
    };

    const handleSave = () => {
        setCreateTodo(getValues());
    };

    return (
        <div className="flex flex-col gap-2 mt-4 max-w-96 p-2 border-2 border-gray-100 rounded-md">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
            >
                <input
                    className="t-1 p-2 w-full rounded-md border-2 border-gray-200 outline-indigo-600"
                    placeholder="title"
                    {...register("title")}
                />
                <textarea
                    className="t-1 p-2 w-full rounded-md border-2 border-gray-200 outline-indigo-600"
                    placeholder="describe"
                    {...register("describe")}
                ></textarea>
                <button
                    type="submit"
                    className=" rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white"
                >
                    create
                </button>
            </form>
            <button
                className=" rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white"
                onClick={handleSave}
            >
                save
            </button>
        </div>
    );
}
