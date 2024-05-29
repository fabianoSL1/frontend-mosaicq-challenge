import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { NewTodoForm } from "./components/todo/newTodoForm";
import { TopBar } from "./components/topBar";
import { TodoStatus } from "./api/todo/entities/todoStatus";
import { todoService } from "./api/todo/todoService";
import { TodoList } from "./components/todo/todoList";
import { useTodoList } from "./hooks/useTodoList";

export function App() {
    const {todoList, setTodoList} = useTodoList();

    const [status] = useState<TodoStatus | undefined>();

    useEffect(() => {
        todoService.getAll()
            .then((data) => setTodoList(data));
    }, [setTodoList]);
    
    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar />
            <Container>
                <NewTodoForm />
                <TodoList todos={todoList} status={status} />
            </Container>
        </div>
    );
}
