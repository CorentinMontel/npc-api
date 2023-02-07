import mongoose, {Schema} from "mongoose";

const npcModel = new Schema({ name: String })

export default mongoose.model('Npc', npcModel);
