import axios from 'axios';
import { ENPOINTS } from '../utils/general';
import { getHeaders } from '../utils/general';


// para listar todas las canciones

const listarMusica = async (state) => {
  const url = ENPOINTS.musica;
  const request = await axios.get(url);
  state(request.data);
};

// para crear una cancion *****************************************************************

const crearMusica = async (data) => {
  const url = ENPOINTS.musica;
  try {
    const instance = axios.create({ baseURL: 'http://localhost:8000', headers: getHeaders() })
    const response = await instance.post('/Musica/', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//****************************************************************************************** */


// para actualizar un evento 

const actualizarMusica = async (state, params) => {
  try {
    const url = ENPOINTS.musica + params.id + '/';
    const request = await axios.put(url, params);
    state(request.data);
    return request.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// para eliminar un evento 

const eliminarMusica = async (state, id) => {
  try {
    const url = ENPOINTS.musica + id;
    const request = await axios.delete(url);
    state(request.data);
    return request.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export {
  listarMusica,
  crearMusica,
  actualizarMusica,
  eliminarMusica
};