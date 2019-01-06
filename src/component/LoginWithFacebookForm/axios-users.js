import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-auth-react-283b6.firebaseio.com/'

});

export default instance;