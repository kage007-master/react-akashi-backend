import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ethSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    string: {type: String, required: true},
    ip: {type: String, required: true},
    time: {type: Date}
})

export default mongoose.model("Vault", ethSchema);