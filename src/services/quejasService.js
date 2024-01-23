import axios from 'axios';
import { ENPOINTS } from '../utils/general';
import { getHeaders } from '../utils/general';


// listar todas las reservas

const listarQuejas = async (state) => {
  const url = ENPOINTS.quejas;
  const request = await axios.get(url);
  state(request.data);
};

// crear una queja

const crearQuejas = async (data) => {
    const url = ENPOINTS.quejas;
    try {
      const instance = axios.create({baseURL:'http://localhost:8000',headers:getHeaders()})
      const response = await instance.post('/Sugerencias-Quejas/', data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


// actualizar una queja

const actualizarQuejas = async (state, params) => {
    try {
      const url = ENPOINTS.quejas + params.id + '/';
      const request = await axios.put(url, params);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

// eliminar una reserva

const eliminarQuejas = async (state, id) => {
    try {
      const url = ENPOINTS.quejas + id;
      const request = await axios.delete(url);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export {
    listarQuejas,
    crearQuejas,
    actualizarQuejas,
    eliminarQuejas
  };