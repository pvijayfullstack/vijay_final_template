import types from './types'
import fetchData from '../util'

const getExecutiveProducts = () => {
    return fetchData(
        types.GET_EXECUTIVE,
        'getExecutiveProducts',
    )
}

export default {
    getExecutiveProducts
}