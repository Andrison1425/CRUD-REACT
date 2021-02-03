import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component,...props}) => {
    const producto=useSelector(store=>store.productos.productoEditar);

    if(producto){
        return <Route {...props} component={component} />
    }

    return <Redirect to="/" />
}

export default PrivateRoute
