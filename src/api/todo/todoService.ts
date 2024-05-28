import { Todo } from "./entities/Todo";
import { api } from "../api";
import { UpdateTodoDTO } from "./dtos/update-todo";
import { CreateTodoDTO } from "./dtos/create-todo";

class TodoService {
    async get(todoId: number): Promise<Todo> {
        const response = await api.get(`/todos/${todoId}`);
        return JSON.parse(response.data);
    }

    async getAll(): Promise<Todo[]> {
        const response = await api.get(`/todos`);
        return JSON.parse(response.data);
    }

    async create(data: CreateTodoDTO): Promise<Todo> {
        const response = await api.post(`/todos`, JSON.stringify(data));
        return JSON.parse(response.data);
    }

    async update(todoId: number, data: UpdateTodoDTO): Promise<Todo> {
        const response = await api.put(
            `/todos/${todoId}`,
            JSON.stringify(data),
        );
        return JSON.parse(response.data);
    }

    async delete(todoId: number): Promise<Todo> {
        const response = await api.delete(`/todos/${todoId}`);
        return JSON.parse(response.data);
    }
}

export const todoService = new TodoService();
