const express = require("express");
const auth = require("../middleware/auth");
const Note = require("../models/Note");
const router = express.Router();

// GET all notes
router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ userId: req.user });
  res.json(notes);
});

// CREATE note
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({
    userId: req.user,
    title,
    content,
  });

  res.json(note);
});

// UPDATE note
router.put("/:id", auth, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.user },
    req.body,
    { new: true }
  );
  res.json(note);
});

// DELETE note
router.delete("/:id", auth, async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, userId: req.user });
  res.json({ msg: "Note deleted" });
});

module.exports = router;
