import {handleAction, handleActions} from 'redux-actions';
import typeToReducer from 'type-to-reducer';
import {NAME, FETCH_PRODUCTS} from './constants';

/*
const initialState = {
    [NAME]: {
        isPending: false,
        productList: {
            pageNum: -1,
            list:[]
        }
    }
};
*/

/*
export default handleActions({
    [`${FETCH_PRODUCTS}_PENDING`]: (state, action) => {
        return {
            ...state,
            licai: {
                ...state.licai,
                isPending: true
            }
        };
    },
    [`${FETCH_PRODUCTS}_FULFILLED`]: (state, action) => {
        const data = action.payload.data;
        if(data) {
            return {
                ...state,
                licai: {
                    ...state.licai,
                    isPending: false,
                    productList: {
                        ...data,
                        list: [
                            ...state.licai.productList.list,
                            ...data.pageData
                        ]
                    }
                }
            }
        } else {
            return state;
        }
    },
    [`${FETCH_PRODUCTS}_REJECTED`]: (state, action) => {
        return {
            ...state,
            licai: { ...state.licai, isPending: false }
        }
    }
}, initialState)
*/

/*
export default typeToReducer({
    [FETCH_PRODUCTS]: {
        PENDING: (state, action) => ({
            ...state,
            [NAME]: {
                ...state[NAME],
                isPending: true
            }
        }),
        FULFILLED: (state, action) => {
            const data = action.payload.data;
            if(data) {
                return {
                    ...state,
                    [NAME]: {
                        ...state[NAME],
                        isPending: false,
                        productList: {
                            ...data,
                            list: [
                                ...state.licai.productList.list,
                                ...data.pageData
                            ]
                        }
                    }
                }
            } else {
                return state;
            }
        },
        REJECTED: (state, action) => ({
            ...state,
            [NAME]: { ...state.licai, isPending: false }
        })
    }
}, initialState);
*/


const initialState = {
    isPending: false,
    productList: {
        pageNum: -1,
        list:[]
    }
};

export default typeToReducer({
    [FETCH_PRODUCTS]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true
        }),
        FULFILLED: (state, action) => {
            const data = action.payload.data;
            if(data) {
                return {
                    ...state,
                    isPending: false,
                    productList: {
                        ...data,
                        list: [
                            ...state.productList.list,
                            ...data.pageData
                        ]
                    }
                }
            } else {
                return state;
            }
        },
        REJECTED: (state, action) => ({
            ...state,
            isPending: false
        })
    }
}, initialState);