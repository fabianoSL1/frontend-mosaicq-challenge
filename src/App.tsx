import { useEffect } from "react";
import { todoService } from "./api/todo/todoService";
import { authService } from "./api/auth/authService";

function App() {
    useEffect(() => {
        todoService
            .getAll()
            .then((result) => console.log(result))
            .catch((err) => console.error(err));
    });

    function auth() {
        authService.createToken();
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>)
            <button onClick={auth}>auth</button>
        </>
    );
}

export default App;
