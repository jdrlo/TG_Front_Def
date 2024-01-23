import axios from 'axios';
import { ENPOINTS } from '../utils/general';


// listar todos los eventos

const listarEventos = async (state) => {
  const url = ENPOINTS.eventos;
  const request = await axios.get(url);
  state(request.data);
};

// crear un evento 

const crearEvento = async (state, params) => {
    const url = ENPOINTS.eventos;
    try {
      const response = await axios.post(url, params);
      state(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


// actualizar un evento 

const actualizarEvento = async (state, params) => {
    try {
      const url = ENPOINTS.eventos + params.id + '/';
      const request = await axios.put(url, params);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

// eliminar un evento 

const eliminarEvento = async (state, id) => {
    try {
      const url = ENPOINTS.eventos + id;
      const request = await axios.delete(url);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export {
    listarEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
  };