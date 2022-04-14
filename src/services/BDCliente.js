import axios from 'axios';

export default class BDProducto{
     URL = "http://localhost:8090/cliente/";

     getAll(){
         return axios.get(this.URL);
     }
}