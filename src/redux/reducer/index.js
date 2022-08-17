import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import demoReducer from './demoReducer'

const rootReducer = combineReducers({
    menuReducer,
    demoReducer
})

export default rootReducer
