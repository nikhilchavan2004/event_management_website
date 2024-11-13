import mongoose from "mongoose";
import validator from "validator";
const msg = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "must contain 3 chars"],
  },
  email: {
    type: String,
    required: true,

    validate: [validator.isEmail, "please provide email"],
  },
  subject: {
    type: String,
    required: true,
    minLength: [5, "must contain 5 chars"],
  },
  message: {
    // Changed 'msg' to 'message' for consistency
    type: String,
    required: true,
    minLength: [15, "must contain at least 15 characters"], // Updated message for clarity
  },
});
export const masg = mongoose.model("masg", msg);
