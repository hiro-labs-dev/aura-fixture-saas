const express = require("express");
const router = express.Router();
// @entity Project Task Member
router.get("/api/projects", (req, res) => res.json([]));
router.get("/api/projects/:id", (req, res) => res.json({}));
router.post("/api/projects", (req, res) => res.status(201).json({}));
router.get("/api/tasks", (req, res) => res.json([]));
router.post("/api/tasks", (req, res) => res.status(201).json({}));
router.put("/api/tasks/:id", (req, res) => res.json({}));
router.delete("/api/tasks/:id", (req, res) => res.status(204).end());
module.exports = router;
