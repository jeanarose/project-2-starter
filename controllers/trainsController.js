const express = require("express");

const router = express.Router();

// TODO: Add database calls to all routes
router.get("/");

router.get("/:id");

router.post("/");

router.put("/:id");

router.delete("/:id");

module.exports = router;
