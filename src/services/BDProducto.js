import axios from 'axios';

export default class BDProducto{
     URL = "http://localhost:8090/producto/";

     getAll(){
         return axios.get(this.URL);
     }
     save(producto){
         return axios.post(this.URL, producto);
     }
}