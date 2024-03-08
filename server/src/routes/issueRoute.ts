import express from "express";
import issueController from "../controllers/issueController";

const router = express.Router();

// create new issue if provided id does not exist
router.post("/", issueController.createIssue);

export default router;
