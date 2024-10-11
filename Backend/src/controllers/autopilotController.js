const componentService = require("../services/autopilotService");

const getAutopilots = (req, res) => {
    const allComponents = componentService.getComponents();
    res.send("Get all Autopilots");
};

const getAutopilot = (req, res) => {
    const component = componentService.getComponent();
    res.send("Get an existing Autopilots");
};

const createAutopilot = (req, res) => {
    const createComponent = componentService.createComponent();
    res.send("Create a new Autopilots");
};

const updateAutopilot = (req, res) => {
    const updateComponent = componentService.updateComponent();
    res.send("Update an existing Autopilots");
};

const deleteAutopilot = (req, res) => {
    const deleteComponent = componentService.deleteComponent();
    res.send("Delete an existing Autopilots");
};

module.exports = {
    getAutopilots,
    getAutopilot,
    createAutopilot,
    updateAutopilot,
    deleteAutopilot,
};
