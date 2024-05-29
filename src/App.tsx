import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { NewTodoForm } from "./components/todo/newTodoForm";
import { TopBar } from "./components/topBar";
import { TodoStatus } from "./api/todo/entities/todoStatus";
import { todoService } from "./api/todo/todoService";
import { TodoList } from "./components/todo/todoList";
import { useTodoList } from "./hooks/useTodoList";
import { ButtonStatus } from "./components/buttonStatus";

export function App() {
    const { setTodoList } = useTodoList();

    const [statusList, setStatusList] = useState<TodoStatus[]>([]);

    useEffect(() => {
        todoService.getAll().then((data) => setTodoList(data));
    }, [setTodoList]);

    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar />
            <Container>
                <NewTodoForm />
                <div className="flex gap-6 mt-12 px-8">
                {Object.values(TodoStatus).map((status) => (
                    <ButtonStatus
                        key={status}
                        status={status}
                        setStatusList={setStatusList}
                    />
                ))}
                </div>
                <TodoList statusList={statusList} />
            </Container>
        </div>
    );
}
