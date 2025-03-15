import { ACTIONS } from "../const";
import { TaskContext } from "../context/task";
import { AddTask } from "./AddTask"
import { useContext, useState } from "react";

export function Menu() {


    const { dispatch } = useContext(TaskContext);
    const [showInfo, setShowInfo] = useState(false);

    const changeState = () => {
        setShowInfo(!showInfo);
    }

    const deleteAllTask = () => {
        dispatch({ type: ACTIONS.RESET_TASKS });
    }

    return (
        <>

            <nav>
                <button onClick={changeState}>Add task</button>
                <button onClick={deleteAllTask}>Reset tasks</button>
            </nav>

            {showInfo && (<AddTask setShowInfo={setShowInfo} />)}

        </>

    )
}