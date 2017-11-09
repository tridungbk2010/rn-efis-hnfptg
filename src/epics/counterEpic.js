import {DECREMENT, DECREMENT_ASYNC, INCREMENT, INCREMENT_ASYNC} from "../actions/actionTypes";

export const increaseNumAsync = action$ =>
    action$.ofType(INCREMENT_ASYNC)
        .delay(500)
        .mapTo({type:INCREMENT});

export const decreaseNumAsync = action$ =>
    action$.ofType(DECREMENT_ASYNC)
        .delay(500)
        .mapTo({type:DECREMENT});
