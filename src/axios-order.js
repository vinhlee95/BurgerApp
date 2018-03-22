import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-burger-app-518a5.firebaseio.com/';
})

export default instance;