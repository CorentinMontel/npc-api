export default class ApiResponder {
    constructor(res) {
        this.res = res
    }

    sendOk(content = {message: "Ok"}) {
        this.res.status(200)
        this.res.json(content)
    }

    sendNotFound(content = {message: "NotFound"}) {
        this.res.status(404)
        this.res.json(content)
    }

    sendCreated(content = {message: "Created"}) {
        this.res.status(201)
        this.res.json(content)
    }
}