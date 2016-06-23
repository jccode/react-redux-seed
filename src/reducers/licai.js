import {handleAction, handleActions} from 'redux-actions';

export default handleActions({
    FETCH_PRODUCTS: (state, action) => ({
        ...state,
            licai: {
            ...state.licai,
                productList: [...state.licai.productList, action.payload]
        }
    }),
})