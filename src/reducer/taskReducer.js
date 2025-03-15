import { ACTIONS } from "../const";

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [...state, action.payload];
        case ACTIONS.REMOVE_TASK:
            return state.filter((_, index) => index !== action.payload);
        case ACTIONS.RESET_TASKS:
            return [];
        default:
            return state;
    }

}