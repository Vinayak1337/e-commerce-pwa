import { INITIAL_STATE, SET_USER } from "./Constants";

export const userReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_USER: 
            return {
                ...state, user: action.payload
            }

        default: return  state;
    }
}