import axios from 'axios';
import { ENPOINTS } from '../utils/general';


// *******************************************

//listar todos los usuarios para el perfil 

const listarClientes = async () => {
    const url = ENPOINTS.perfil;
    return axios.get(url);
  };
  
  const actualizarClientes = async (data,id) => {
    try {
      const url = ENPOINTS.perfil + id + '/';
      const request = await axios.put(url,data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  
  //********************************************* */


  
  export {
    listarClientes,
    actualizarClientes
  };