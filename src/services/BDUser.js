import axios from 'axios';

export default class BDUser{
     URL = "http://localhost:8090/user/";

     getAll(){
         return axios.get(this.URL);
     }

     save(user){
        return axios.post(this.URL, user);
     }
}