export default class BDProducto {
    URL = "http://localhost:8090/producto/";

    getAll() {
        return fetch(this.URL);
    }
    
    getOne(id) {
        return fetch(this.URL+id);
    }

    save(producto) {
        return fetch(this.URL, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        })
    }

    upDate(id, producto) {
        return fetch(this.URL + id, {
            method: "PUT", // or 'POST'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        })
    }

    delete(id){
        fetch(this.URL+id,{
            method: "DELETE"
        })
    }

    //--------imagenes-----------
    getImg(id) {
        return fetch(this.URL+'image/'+id);
    }

}