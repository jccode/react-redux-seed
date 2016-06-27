
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducer'


const loggerMiddleware = createLogger({
    collapsed: true,
    predicate: () => process.env.NODE_ENV === 'development'
});

export default function configureStore(initalState) {
    const store = createStore(
        rootReducer,
        initalState,
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware(),
            loggerMiddleware
        )
    );

    if(module.hot) {
        // module.hot.accept("../reducers", () => {
        //     const nextRootReducers = require('../reducers/index');
        //     store.replaceReducer(nextRootReducers);
        // });

        module.hot.accept(rootReducer, () => {
            const nextRootReducers = require('./reducer').reducers;
            store.replaceReducer(nextRootReducers);
        });
    }

    return store;
}