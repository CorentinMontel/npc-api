import Npc from "../model/npc";
import mongoose from "mongoose";
import ApiResponder from "../service/api-responder";

export default {
    home: async (req, res) => {

        const npc = new Npc({ name: "Coco l'asticot" });
        await npc.save()
        console.log('pnj créé')
        new ApiResponder(res).sendCreated(npc)
    },

    npcs: (req, res) => {
        new ApiResponder(res).sendNotFound()
    },

    subscribe: (req, res) => {
        new ApiResponder(res).sendNpcCollection([
            {},
            {},
            {},
        ])
    },

    login: (req, res) => {
        res.send('Login')
    }
}