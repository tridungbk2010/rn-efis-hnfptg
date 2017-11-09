import {DECREMENT_ASYNC, INCREMENT_ASYNC} from "./actionTypes";

export const increaseNum = () => ({type: INCREMENT_ASYNC});
export const decreaseNum = () => ({type: DECREMENT_ASYNC});