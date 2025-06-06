const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(400).json({ error: "Failed to create job" });
  }
});

module.exports = router;
