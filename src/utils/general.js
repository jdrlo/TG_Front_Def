const BASE_PATH = 'http://127.0.0.1:8000/';

const ENPOINTS = {
 
  /* Eventos */
  eventos: BASE_PATH + 'Eventos/',

  /* Quote */
  articulos: BASE_PATH + 'Articulos/',

  /* Client */
  musica: BASE_PATH + 'Musica/',

  /* Employee */
  usuarios: BASE_PATH + 'users/create/',

  /* Tools */
  reservas: BASE_PATH + 'Reservas/',

  /* Item */
  pedido_Mesero: BASE_PATH + 'Pedido_Mesero/',

  /* Item */
  pedido_Bodega: BASE_PATH + 'Pedido_Bodega/', 

  /* Item */
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
  const token = localStorage.getItem('token')
  const headers = {'Authorization':`Token ${token}`, 'Content-Type':'application/json'}
  return headers
}

export {ENPOINTS, BASE_PATH, getHeaders};







