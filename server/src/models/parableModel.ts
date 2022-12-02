import { model, Schema } from "mongoose";

const parableSchema = new Schema({
  gospel: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
});

export default model("Parable", parableSchema);
