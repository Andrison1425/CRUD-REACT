import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productoEditarAction } from '../actions/productoActions';

const EditarProducto = () => {
    const {id}=useParams();
    
    const producto=useSelector(store=>store.productos.productoEditar);
    const dispatch=useDispatch();

    const [state,setState]=useState({nombre:producto.nombre,precio:producto.precio,id:id});

    const agregarState=e=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const enviarForm=e=>{
        e.preventDefault();
        dispatch(productoEditarAction(state));
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form onSubmit={enviarForm}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    onChange={agregarState}
                                    required
                                    value={state.nombre}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    onChange={agregarState}
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={Number(state.precio)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
