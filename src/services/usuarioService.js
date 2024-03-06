import axios from 'axios';
import { ENPOINTS } from '../utils/general';


// listar todos los usuarios para el match

const listarUsuarios = async (state) => {
  const url = ENPOINTS.usuarios;
  const request = await axios.get(url);
  state(request.data);
};


const crearCliente = async (data) => {
const url = ENPOINTS.cliente;
console.log(data)
try {
  const response = await axios.post(url, data);
  return response.data;
} catch (error) {
  console.error(error);
  throw error;
}
};





// crear un usuario


const crearUsuarios = async (data) => {
    const url = ENPOINTS.usuarios;
    console.log(data)
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };



// actualizar un usuario

const actualizarUsuarios = async (state, params) => {
    try {
      const url = ENPOINTS.usuarios + params.id + '/';
      const request = await axios.put(url, params);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

// eliminar un usuario

const eliminarUsuarios = async (state, id) => {
    try {
      const url = ENPOINTS.usuarios + id;
      const request = await axios.delete(url);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export {
    listarUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
    crearCliente
  };