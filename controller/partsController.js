const Part = require("../models/Part");

const index = async (req, res) => {
  try {
    const parts = await Part.find({});
    res.json(parts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const create = async (req, res) => {
  try {
    const part = await Part.create(req.body);
    res.status(201).json(part);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const part = await Part.findByIdAndUpdate(id, req.body, { new: true });
    if (!part) {
      return res.status(404).json({ error: "Part not found" });
    }
    res.json(part);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const part = await Part.findByIdAndDelete(id);
    if (!part) {
      return res.status(404).json({ error: "Part not found" });
    }
    res.json({ message: "Part deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  index,
  create,
  update,
  remove,
};
