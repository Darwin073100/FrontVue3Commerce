import axios from 'axios';

export default class BDProducto{
     URL = "http://localhost:8090/user/";

     getAll(){
         return axios.get(this.URL);
     }
}