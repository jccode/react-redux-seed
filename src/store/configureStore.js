
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import reducer from '../reducers/index';


const loggerMiddleware = createLogger({
    collapsed: true,
    predicate: () => process.env.NODE_ENV === 'development'
});

export default function configureStore(initalState) {
    return createStore(
        reducer,
        initalState,
        applyMiddleware(
            promiseMiddleware,
            loggerMiddleware
        )
    )
}