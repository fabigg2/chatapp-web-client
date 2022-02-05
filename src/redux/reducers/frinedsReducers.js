import { types } from "../types";

const initialState = {
    empty: true,
    friends: []
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addFirend:
            state= {
                empty: false,
                friends: action.payload
            }
            return state;
        default:
            return state;
    }
}
