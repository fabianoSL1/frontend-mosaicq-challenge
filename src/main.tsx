import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { TodoProvider } from "./contexts/todo/todoProvider.tsx";
import { App } from "./App.tsx";
import { AuthProvider } from "./contexts/auth/authProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </AuthProvider>
    </React.StrictMode>
);
