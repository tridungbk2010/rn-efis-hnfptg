import {applyMiddleware, createStore} from 'redux';
// import {createEpicMiddleware} from 'redux-observable';
// import rootEpic from '../epics';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';

const initialState = {};
// const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    let store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
    let persistor = persistStore(store);

    return {persistor, store};
}

