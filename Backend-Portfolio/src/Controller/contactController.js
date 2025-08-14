import { Contact } from "../Model/model.js";

export const createContact = async (req, res, next) => {
  try {
    let result = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "contact created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
