import Npc from "../model/npc";
import mongoose from "mongoose";

export default {
    home: async (req, res) => {
        const npc = new Npc({ name: "Coco l'asticot" });
        await npc.save()
        res.send(npc)
    },

    npcs: (req, res) => {
        res.send('Npcs')
    },

    subscribe: (req, res) => {
        res.send('Subscribe')
    },

    login: (req, res) => {
        res.send('Login')
    }
}