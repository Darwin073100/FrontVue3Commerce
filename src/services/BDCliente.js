export default class BDCliente {
    URL = "http://localhost:8090/trabajador/";

    getAll() {
        return fetch(this.URL);
    }

    save(cliente) {
        return fetch(this.URL, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
        })
    }

    upDate(id, cliente) {
        return fetch(this.URL + id, {
            method: "PUT", // or 'POST'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
        })
    }

    delete(id){
        fetch(this.URL+id,{
            method: "DELETE"
        })
    }


}