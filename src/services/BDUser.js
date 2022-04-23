export default class BDUser {
    URL = "http://localhost:8090/trabajador/";

    getAll() {
        return fetch(this.URL);
    }

    save(user) {
        return fetch(this.URL, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
    }

    upDate(id, user) {
        return fetch(this.URL + id, {
            method: "PUT", // or 'POST'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
    }

    delete(id){
        fetch(this.URL+id,{
            method: "DELETE"
        })
    }


}