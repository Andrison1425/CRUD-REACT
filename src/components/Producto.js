import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { eliminarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre,precio,id}=producto;
    const dispatch=useDispatch();

    const confirmarElimacion=()=>{

        dispatch(eliminarProductoAction(id));
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td className="acciones">
                <Link 
                    to={`/productos/editar/${id}`} 
                    className="btn btn-primary mr-2"
                    onClick={()=>dispatch(obtenerProductoEditar(producto))}
                >Editar</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>confirmarElimacion(id)}
                >Eliminar</button>
            </td>   
        </tr>
    )
}

export default Producto
