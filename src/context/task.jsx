import { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

const storedTasks = localStorage.getItem("task-data");

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, storedTasks ? JSON.parse(storedTasks) : []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }
        }>
            {children}
        </TaskContext.Provider>
    )
}