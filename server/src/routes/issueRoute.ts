import express from "express";
import issueController from "../controllers/issueController";

const router = express.Router();

// get issue by id
router.get("/", issueController.getIssue);

// create new issue if provided id does not exist
router.post("/", issueController.createIssue);

export default router;
