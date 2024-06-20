import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    feedbackText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
