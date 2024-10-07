const express = require("express");
const componentController = require("../controllers/componentController");
const router = express.Router();

router.get("/", componentController.getComponents);
router.get("/:componentId", componentController.getComponent);
router.post("/", componentController.createComponent);
router.patch("/:componentId", componentController.updateComponent);
router.delete("/:componentId",componentController.deleteComponent);

module.exports = router;
