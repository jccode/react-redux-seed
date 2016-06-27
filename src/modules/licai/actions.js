import {createAction} from 'redux-actions';
import {get} from '../../utils';
import {FETCH_PRODUCTS} from './constants';

const PAGE_SIZE = 10;

export const fetch_products = createAction(FETCH_PRODUCTS, (pageNum) => get(`/api/finance/product/getList?pageNum=${pageNum}&pageSize=${PAGE_SIZE}`));

export default {
    fetch_products,
}
