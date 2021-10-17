import { types } from "../types/types";


export const playerReducer = (state, action) => {

    switch (action.type) {
        case types.addPlayer:
            return [...state, action.payload];

        case types.deletePlayer:
            return state.filter( p => p.id !== action.payload);
    
        default:
            return state;
    }
}