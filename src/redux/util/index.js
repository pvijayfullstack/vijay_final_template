

const baseAction = (action, payload = {}) => ({ type: action, payload})


const fetchData = (actionType, method, perPage = 1 , data=null) => async(
    dispatch,
    getState,
    services
    ) => {
        debugger
        const { api } = services
        console.log('Api, method', api, method)
        try {
            let response = await api[method](perPage, data);
            if(response.status === 200 || response.statusText === 'OK'){
                const payload = response.data;
                dispatch(baseAction(actionType, payload));
            } else {
                throw response
            }
        }catch(err){
            debugger
            console.log('error::::', err)
        }
       
}

export default  fetchData

