import Home from "./controller/home";

export default function (app) {
    app.get('/', Home.home)
    app.get('/npcs', Home.npcs)
    app.get('/subscribe', Home.subscribe)
    app.get('/login', Home.login)
}