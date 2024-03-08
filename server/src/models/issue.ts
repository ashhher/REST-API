import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
export default Issue;
