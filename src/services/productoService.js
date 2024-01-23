import axios from 'axios';
//import { id } from 'date-fns/locale';
import { ENPOINTS } from '../utils/general';


// listar todos los Productos

//const listarProductos = async (state) => {
//  const url = ENPOINTS.articulos;
//  const request = await axios.get(url);
//  state(request.data);
//};

const listarProductos = async () => {
  const url = ENPOINTS.articulos;
  return axios.get(url)
};

// crear un Producto

const crearProductos = async (state, params) => {
    const url = ENPOINTS.articulos;
    try {
      const response = await axios.post(url, params);
      state(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


// actualizar un Producto

const actualizarProductos = async (state, params) => {
    try {
      const url = ENPOINTS.articulos + params.id + '/';
      const request = await axios.put(url, params);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

// eliminar un Producto

const eliminarProductos = async (state, id) => {
    try {
      const url = ENPOINTS.articulos + id;
      const request = await axios.delete(url);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export {
    listarProductos,
    crearProductos,
    actualizarProductos,
    eliminarProductos
  };