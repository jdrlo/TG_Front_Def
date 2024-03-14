const BASE_PATH = 'http://127.0.0.1:8000/';

const ENPOINTS = {
 
  /* Eventos */
  eventos: BASE_PATH + 'Eventos/',

  /* articulos */
  articulos: BASE_PATH + 'Articulos/',

  /* musica */
  musica: BASE_PATH + 'Musica/',

  /* usuarios */
  usuarios: BASE_PATH + 'users/create/',

  /* reservas */
  reservas: BASE_PATH + 'Reservas/',

  /* pedido mesero */
  pedido_Mesero: BASE_PATH + 'Pedido_Mesero/',

  /* pedido bodega */
  pedido_Bodega: BASE_PATH + 'Pedido_Bodega/', 

  /* inventario */
  inventario: BASE_PATH + 'Invetario/',   

  /* quejasSugerencias */
  quejas: BASE_PATH + 'Sugerencias-Quejas/',

  /* login */
  login: BASE_PATH + 'users/login/',

  /* Match */
  match: BASE_PATH + 'users/match/',

  /* cliente */
  cliente: BASE_PATH + 'users/cliente/',

  /* perfil */
  perfil: BASE_PATH + 'users/perfil/'

};







const getHeaders = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  const headers = {
    'Authorization': `Token ${token}`,'Content-Type': 'application/json','User-Id': id
  };

  console.log(localStorage)
  return headers;
};

export {ENPOINTS, BASE_PATH, getHeaders};







