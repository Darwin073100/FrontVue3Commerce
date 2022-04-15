import axios from 'axios';

export default class BDTrabajador{
     URL = "http://localhost:8090/trabajador/";

     getAll(){
         return axios.get(this.URL);
     }
}