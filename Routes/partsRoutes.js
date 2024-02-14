const express = require("express");
const router = express.Router();

const partsController = require("../controllers/partsController");

// GET /api/parts
router.get("/", partsController.index);

// POST /api/parts
router.post("/", partsController.create);

// PUT /api/parts/:id
router.put("/:id", partsController.update);

// DELETE /api/parts/:id
router.delete("/:id", partsController.remove);

module.exports = router;
