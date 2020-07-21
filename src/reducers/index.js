import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'

import api from '../redux/util/api'

import executive from '../redux/executive'

export const rootReducer = combineReducers({

    [executive.name]: executive.reducer

})

export const configureStore = () => {
    const composeEnhancers = composeWithDevTools({});
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk.withExtraArgument({api})))
        )
}