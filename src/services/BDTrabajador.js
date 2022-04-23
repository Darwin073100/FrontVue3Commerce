export default class BDTrabajador {
    URL = "http://localhost:8090/trabajador/";

    getAll() {
        return fetch(this.URL);
    }

    save(trabajador) {
        return fetch(this.URL, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trabajador),
        })
    }

    upDate(id, trabajador) {
        return fetch(this.URL + id, {
            method: "PUT", // or 'POST'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trabajador),
        })
    }

    delete(id){
        fetch(this.URL+id,{
            method: "DELETE"
        })
    }


}