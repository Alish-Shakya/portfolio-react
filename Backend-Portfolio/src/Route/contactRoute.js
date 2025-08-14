import { Router } from "express";
import { createContact } from "../Controller/contactController.js";

const contactRouter = Router();

contactRouter.route("/create").post(createContact);

export default contactRouter;
