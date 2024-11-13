import { masg } from "../models/msgmodel.js";

export const msgc = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body; // Ensure this matches what's being sent from the frontend

    if (!name || !email || !subject || !message) {
      // Corrected 'msg' to 'message'
      return res.status(400).json({ msg: "Please fill in all fields" });
    }

    const j = await masg.create({
      name,
      email,
      subject,
      message, // Ensure this matches what you're sending from the frontend
    });
    console.log("Received data:", req.body);

    res.json({ message: "Message sent successfully!", j }); // Respond with a success message
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";

      // Check each field for errors and append messages if they exist
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " "; // Corrected from 'name' to 'email'
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " "; // Corrected from 'name' to 'subject'
      }
      if (error.errors.message) {
        // Changed from 'msg' to 'message'
        errorMessage += error.errors.message.message + " "; // Corrected from 'name' to 'message'
      }

      return res.status(400).json({ msg: errorMessage.trim() }); // Trim whitespace
    }

    console.error(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
