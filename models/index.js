import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  selectedFile: String,
});

var PostMessage = mongoose.model("PostService", postSchema);

export default PostMessage;