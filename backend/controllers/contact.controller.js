import Contact from "../models/Contact.js";

// SUBMIT CONTACT FORM
export const submitContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({
      fullName,
      email,
      mobile,
      city
    });

    res.status(201).json({ message: "Contact form submitted", contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL CONTACT FORMS
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
