
import * as utils from './utils'
import reducer from './reducers'

export default {
    NAME: 'common',
    http: utils.http,
    reducer,
    utils
};

