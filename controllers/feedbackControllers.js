import Feedback from "../models/Feedback.js";

async function addFeedbacks(req, res) {
  console.log(req.body)
  try {
    const { feedback } = req.body;

    const { email, feedbackText, rating } = feedback;

    const isExisting = await Feedback.findOne({
      email,
      feedbackText,
      rating,
    });

    if (!isExisting) {
      const feedback = await Feedback.create({
        email,
        feedbackText,
        rating,
      });

      return res.status(201).json({
        message: `Feedback ${feedback.feedbackText} saved successfully`,
      });
    }

    res.status(200).json({
      message: `Feedback ${feedbackText} Already Exists`,
    });
} catch (error) {
  console.error("Error adding Feedbacks: ", error);
}
}

async function getFeedbacks(req, res) {
  try {
    const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching Feedbacks: ", error);
  }
}

export { addFeedbacks, getFeedbacks };
