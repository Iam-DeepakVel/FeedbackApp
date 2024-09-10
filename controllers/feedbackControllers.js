import Feedback from "../models/Feedback.js";

async function addFeedbacks(req, res) {
  try {
    const feedbacks = req.body;

    const savedFeedbacks = [];

    for (const feedback of feedbacks) {
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

        savedFeedbacks.push(feedback);
      }
    }

    if (savedFeedbacks.length === 0) {
      return res.json({ message: "No feedbacks to add!" });
    }

    res.status(201).json({
      message: `${savedFeedbacks.length} feedbacks added successfully`,
      addedFeedbacks: savedFeedbacks,
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
