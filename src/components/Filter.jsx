import { useContext, useState } from "react"
import { FilterContext } from "../context/filter";


export function Filter() {
    const { setFilters } = useContext(FilterContext);
    const handleSelect = (event) => {
        setFilters(event.target.value);
    }
    return (
        <div className="filter">
            <select onChange={handleSelect}>
                <option value="all">All</option>
                <option value="shopping">Shopping</option>
                <option value="exercises">Exercises</option>
                <option value="cleaning">Cleaning</option>
                <option value="work">Work</option>
                <option value="study">Study</option>
            </select>
        </div>

    )
}