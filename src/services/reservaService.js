import axios from 'axios';
import { ENPOINTS } from '../utils/general';
import { getHeaders } from '../utils/general';


// listar todas las reservas

const listarReserva = async (state) => {
  const url = ENPOINTS.reservas;
  const request = await axios.get(url);
  state(request.data);
};

// crear una reserva

const crearReservas = async (data) => {
  const url = ENPOINTS.reservas;
 try {
    const instance = axios.create({baseURL:'http://localhost:3000',headers:getHeaders()})
    const response = await instance.post('/Reservas/', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// actualizar una reserva

const actualizarReservas = async (state, params) => {
    try {
      const url = ENPOINTS.reservas + params.id + '/';
      const request = await axios.put(url, params);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

// eliminar una reserva

const eliminarReservas = async (state, id) => {
    try {
      const url = ENPOINTS.reservas + id;
      const request = await axios.delete(url);
      state(request.data);
      return request.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export {
    listarReserva,
    crearReservas,
    actualizarReservas,
    eliminarReservas
  };