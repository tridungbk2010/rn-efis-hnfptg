import {combineEpics} from 'redux-observable';
import {decreaseNumAsync, increaseNumAsync} from "./counterEpic";

export default combineEpics(
    increaseNumAsync,
    decreaseNumAsync
);