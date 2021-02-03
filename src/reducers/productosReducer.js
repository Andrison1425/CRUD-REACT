import {AGREGAR_PRODUCTO,AGREGAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO, COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, OBTENER_PRODUCTO_EDITAR, PRODUCTO_EDITAR_EXITO, PRODUCTO_ELIMINAR, PRODUCTO_ELIMINAR_EXITO} from '../types/index';

const initialState={
    productos:[],
    error:false,
    loading:false,
    idEliminar:null,
    productoEditar:null
}

export default function productosReducer(state=initialState ,action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {...state, loading:true}    

        case AGREGAR_PRODUCTO_EXITO:
            return {...state,loading:false,productos:[...state.productos,action.payload]}

        case AGREGAR_PRODUCTO_ERROR:
            return {...state,loading:false,error:action.payload}

        case DESCARGA_PRODUCTOS_EXITO:
            return {...state, productos:action.payload, loading:false}

        case PRODUCTO_ELIMINAR:
            return {...state,idEliminar:action.payload}

        case PRODUCTO_ELIMINAR_EXITO:
            return {
                ...state,
                productos:state.productos.filter(producto=>producto.id!==state.idEliminar)
            }

        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoEditar:action.payload
            }

        case PRODUCTO_EDITAR_EXITO:
            return{
                ...state,
                productos:state.productos.map(
                    producto=>producto.id===action.payload.id?action.payload:producto
                ),
                productoEditar:null
            }
        default:
            return state;
    }
}