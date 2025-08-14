import mongoose from "mongoose";
import contactSchema from "../Schema/contactSchema.js";

export const Contact = mongoose.model("Contact", contactSchema);
