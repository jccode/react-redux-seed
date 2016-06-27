import {combineReducers} from 'redux'
import {reducer} from 'momentum-web-common'
import licai from './modules/licai'


const rootReducer = combineReducers({
    "common": reducer,
    [licai.NAME]: licai.reducers
});

export default rootReducer;