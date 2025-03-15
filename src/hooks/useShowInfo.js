import { useState } from "react";


export function useShowInfo() {

    const [showInfo, setShowInfo] = useState(false);

    const changeState = () => {
        setShowInfo(!showInfo);
    }

    return { showInfo, changeState, setShowInfo }
}