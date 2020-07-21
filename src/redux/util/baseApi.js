import axis from 'axios'

import data from '../../components/main/final_api.json'

export default class Api {
    // static get(url) {
    //     return axis.get(url).then(res => {
    //         return res
    //     }).catch(err => {
    //         return err
    //     })
    // }

    static get(url) {
        return {status: 200, data: data}
    }
}