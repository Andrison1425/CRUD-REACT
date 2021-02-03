import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = ({history}) => {
    const [state,setState]=useState({nombre:"",precio:0});

    const cargando=useSelector(state=>state.productos.loading);
    const error=useSelector(state=>state.productos.error);

    const agregarState=e=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const dispatch=useDispatch();

    //Validar formulario
    const submit=e=>{
        e.preventDefault();
        if(state.nombre.trim()==="" || state.precio<=0){
            return;
        }

        dispatch(crearNuevoProductoAction(state));
        history.push("/");
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form onSubmit={submit}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    onChange={agregarState}
                                    value={state.name}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    onChange={agregarState}
                                    name="precio"
                                    value={state.precio}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>

                        </form>
                        {cargando===true?"Cargando...":null}
                        {error===true?<p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>:null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
