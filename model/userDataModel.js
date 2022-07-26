import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  username: { type: String, required: true, max: 100 },
  accountNumber: { type: Number, required: true },
  emailAddress: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  identityNumber: { type: Number, required: true },
});

module.exports = mongoose.model("userData", userDataSchema);
