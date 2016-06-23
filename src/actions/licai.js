import {createAction} from 'redux-actions';


const fetch_products = createAction("FETCH_PRODUCTS", (pageNum) => fetch(`http://test.dianjinhe.com/api/finance/product/getList?pageNum=${pageNum}&pageSize=${PAGE_SIZE}`));

export default {
    fetch_products,
}
