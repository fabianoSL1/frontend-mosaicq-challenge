import { Dispatch, useState } from "react"
import { TodoStatus } from "../api/todo/entities/todoStatus"

type Props = {
    setStatusList: Dispatch<React.SetStateAction<TodoStatus[]>>;
    status: TodoStatus;
}

export function ButtonStatus({setStatusList, status}: Props) {
    const [active, setActive] = useState(false);
    
    function handler() {
        setActive(current => !current);

        setStatusList(current => {
            if (current.includes(status)) {
                return current.filter(item => item != status)
            }
            console.log(current)
            return [...current, status]
        })
    }

    return <button onClick={handler} className={active ? "text-xl border-b-4 border-indigo-500" : "text-xl border-b-4 border-transparent"}>{status}</button>
}