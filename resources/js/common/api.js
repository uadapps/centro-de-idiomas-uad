
import axios from 'axios';
let token = sessionStorage.getItem('token');
export const API = axios.create({
    headers: {
        Authorization:  token 
    }
})