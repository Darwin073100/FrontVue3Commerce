import axios from 'axios';

export default class BDCliente{
     URL = "http://localhost:8090/cliente/";

     getAll(){
         return axios.get(this.URL);
     }

     save(cliente){
         return axios.post(this.URL, cliente);
     }
}