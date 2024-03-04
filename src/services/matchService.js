import axios from 'axios';
import { ENPOINTS } from '../utils/general';


// lista las personas que estan en el match

const listarMatch = async () => {
  const url = ENPOINTS.match;
  return axios.get(url)
};






export {
    listarMatch
  };