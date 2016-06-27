import {createAction} from 'redux-actions';
// import {get} from '../../utils';
import {http} from 'momentum-web-common';
import {FETCH_PRODUCTS} from './constants';

const PAGE_SIZE = 10;

export const fetch_products = createAction(FETCH_PRODUCTS, (pageNum) => http.get(`/api/finance/product/getList?pageNum=${pageNum}&pageSize=${PAGE_SIZE}`));

export default {
    fetch_products,
}
