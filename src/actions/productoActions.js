import {AGREGAR_PRODUCTO,AGREGAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO, COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, PRODUCTO_ELIMINAR, PRODUCTO_ELIMINAR_EXITO, PRODUCTO_EDITAR_EXITO,OBTENER_PRODUCTO_EDITAR} from '../types/index';
import Swal from 'sweetalert2';

export function crearNuevoProductoAction(producto){

    return async (dispatch)=>{
        dispatch(agregarProducto());

        try {
            await fetch(`http://localhost:4000/productos` ,
                {
                    method:"POST",
                    body:JSON.stringify(producto),
                    headers: {'Content-Type': 'application/json'}
                  }
            );
            
            dispatch(agregarProductoExito(producto));

            Swal.fire("Correcto","El producto se agregó","success");
        } catch (error) {
            dispatch(agregarProductoError(true));
            Swal.fire({icon:"error",title:"Error",text:"Hubo un error"});

        }
    }
}

const agregarProducto=()=>({
    type:AGREGAR_PRODUCTO
})

const agregarProductoExito=producto=>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

const agregarProductoError=estado=>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:estado
})

export const listarProductosAction=()=>{
    return async (dispatch)=>{
        dispatch(comenzarDescargaProductos());

        try {   
            const peticion=await fetch("http://localhost:4000/productos");
            const resp=await peticion.json();
            dispatch(descargaProductosExito(resp));
        } catch (error) {
            
        }
    }
};

const comenzarDescargaProductos=()=>({
    type:COMENZAR_DESCARGA_PRODUCTOS
})

const descargaProductosExito=productos=>({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload:productos
})

export const eliminarProductoAction=id=>{
    console.log(id);
    return async (dispatch)=>{
        dispatch(obtenerProductoEliminar(id));

        try {
            await fetch(`http://localhost:4000/productos/${id}`,{method:"DELETE"});

            dispatch(eliminarProductoExito());
        } catch (error) {
            
        }
    }
}

const obtenerProductoEliminar=id=>({
    type:PRODUCTO_ELIMINAR,
    payload:id
})

const eliminarProductoExito=()=>({
    type:PRODUCTO_ELIMINAR_EXITO
})

export const obtenerProductoEditar=producto=>{
    return (dispatch)=>{
        dispatch(obtenerProducto(producto));
    }
}

const obtenerProducto=producto=>({
    type:OBTENER_PRODUCTO_EDITAR,
    payload:producto
})

export const productoEditarAction=producto=>{

    return async (dispatch)=>{
        try {
            await fetch(`http://localhost:4000/productos/${producto.id}`,
                {
                    method:"PUT",
                    body:JSON.stringify(producto),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            dispatch(editarProductoExito(producto));
            Swal.fire("Correcto","El producto se editó","success");

        } catch (error) {
            
        }
        
    }
}

const editarProductoExito=producto=>({
    type:PRODUCTO_EDITAR_EXITO,
    payload:producto
})