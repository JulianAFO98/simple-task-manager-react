import { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";


export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }
        }>
            {children}
        </TaskContext.Provider>
    )
}