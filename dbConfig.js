import mongoose from "mongoose";
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("collection", cardSchema);