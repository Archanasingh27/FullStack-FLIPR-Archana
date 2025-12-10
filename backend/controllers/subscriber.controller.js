import Subscriber from "../models/Subscriber.js";

// ADD SUBSCRIBER
export const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = await Subscriber.create({ email });

    res.status(201).json({ message: "Subscribed successfully", subscriber });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SUBSCRIBERS
export const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
