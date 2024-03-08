import { Request, Response } from "express";
import Issue from "../models/issue";

const createIssue = async (req: Request, res: Response) => {
  try {
    // 1. check if the issue id exists
    const { id } = req.body;
    const exsistingIssue = await Issue.findOne({ id: id });

    if (exsistingIssue) {
      return res.status(403).json({ message: "Issue id already exsist" });
    }

    // 2. create the issue if id doesn't exists
    const newIssue = new Issue(req.body);
    await newIssue.save();

    // 3. return the issue object to the calling client
    res.status(201).json(newIssue.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating issue" });
  }
};

export default {
  createIssue,
};
