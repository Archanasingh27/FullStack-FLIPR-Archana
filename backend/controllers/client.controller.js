import Client from "../models/Client.js";

// ADD CLIENT
export const addClient = async (req, res) => {
  try {
    const { clientName, clientDesignation, clientDescription } = req.body;
    const clientImage = req.file ? req.file.filename : null;

    if (!clientImage || !clientName || !clientDesignation || !clientDescription) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const client = await Client.create({
      clientImage,
      clientName,
      clientDesignation,
      clientDescription,
    });

    res.status(201).json({ message: "Client added successfully", client });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL CLIENTS
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
