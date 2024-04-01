import axios from 'axios';
import { ENPOINTS } from '../utils/general';



// Login

const iniciarSesion = async (data) => {
    const url = ENPOINTS.login;
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export {
    iniciarSesion
  };