import axios from 'axios';
import { ENPOINTS } from '../utils/general';


// lista las personas que estan en el match


const listarMatch = async (state) => {
  const url = ENPOINTS.match;
  const request = await axios.get(url);
  state(request.data);
};





export {
    listarMatch
  };