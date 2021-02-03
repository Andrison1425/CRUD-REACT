import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {listarProductosAction} from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        const descargarProductos=()=>dispatch(listarProductosAction());
        descargarProductos();
    }, []);
    const productos=useSelector(state=>state.productos.productos);
    return (
        <>
            <h2 className="text-center my-5">Listado Productos</h2>

            <table className="table table--striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {productos.lenght===0?"No hay productos":(
                    productos.map(producto=>(
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
                </tbody>
            </table>
        </>
    )
}

export default Productos
