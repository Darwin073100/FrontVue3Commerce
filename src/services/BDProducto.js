export default class BDProducto {
    URL = "http://localhost:8090/producto/";

    getAll() {
        return fetch(this.URL);
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
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        })
    }

    delete(id){
        return fetch(this.URL+id,{
            method: "DELETE"
        })
    }


}