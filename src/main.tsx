import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { CreateTodoProvider } from "./contexts/todo/createTodoProvider.tsx";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CreateTodoProvider>
            <App />
        </CreateTodoProvider>
    </React.StrictMode>
);
