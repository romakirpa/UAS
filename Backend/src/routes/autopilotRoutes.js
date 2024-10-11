const express = require("express");
const autopilotController = require("../controllers/autopilotController");
const router = express.Router();

router.get("/", autopilotController.getAutopilot);
router.get("/:autopilotId", autopilotController.getAutopilot);
router.post("/", autopilotController.createAutopilot);
router.patch("/:autopilotId", autopilotController.updateAutopilot);
router.delete("/:autopilotId", autopilotController.deleteAutopilot);

module.exports = router;
