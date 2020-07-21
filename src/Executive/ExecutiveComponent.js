import React, { useEffect } from 'react';

const Executive = (props) => {

   const { actions } = props

    useEffect( () => {
        actions.getExecutiveProducts()
    }, [])

    const { getExecutiveProducts: executiveProducts } = props
    
    return(
        <div>{JSON.stringify(executiveProducts)}</div>
    )
}

export default Executive
