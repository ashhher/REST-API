import { Request, Response } from "express";
import Issue from "../models/issue";

/**
 * Get issue by id
 */
const getIssue = async (req: Request, res: Response) => {
  try {
    // 1. get issue by id
    const { id } = req.body;
    const issue = await Issue.findOne({ id: id });

    // 1.1 return error if not exsist
    if (!issue) {
      return res.status(404).json({ message: "Issue not found!" });
    }

    // 2. return issue
    res.json(issue);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting issue" });
  }
};

/**
 * Create a new issue
 */
const createIssue = async (req: Request, res: Response) => {
  try {
    // 1. check if the issue id exists
    const { id } = req.body;
    const exsistingIssue = await Issue.findOne({ id: id });

    // 1.1 return error if not exsist
    if (exsistingIssue) {
      return res.status(403).json({ message: "Issue id already exsist" });
    }

    // 2. create the issue if id doesn't exists
    const newIssue = new Issue(req.body);
    await newIssue.save();

    // 3. return the issue object to the calling client
    res.status(201).json(newIssue);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating issue" });
  }
};

export default {
  getIssue,
  createIssue,
};
