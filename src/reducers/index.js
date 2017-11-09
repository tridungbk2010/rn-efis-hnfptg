// import {combineReducers} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import auth from "./authReducer";
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage
};

export default persistCombineReducers(config,{
    auth
});