import types from './types'

const initialState = {
    executiveProducts: []
}

const executiveProductReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.GET_EXECUTIVE:
            return {
                ...state,
                executiveProducts: action.payload
            }
        default:
            return state
    }
}

export default executiveProductReducer;