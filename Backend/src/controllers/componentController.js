const componentService = require("../services/componentService");

const getComponents = (req, res) => {
  const allComponents = componentService.getComponents();
  res.send("Get all components");
};

const getComponent = (req, res) => {
  const component = componentService.getComponent();
  res.send("Get an existing component");
};

const createComponent = (req, res) => {
  const createComponent = componentService.createComponent();
  res.send("Create a new component");
};

const updateComponent = (req, res) => {
  const updateComponent = componentService.updateComponent();
  res.send("Update an existing component");
};

const deleteComponent = (req, res) => {
  const deleteComponent = componentService.deleteComponent();
  res.send("Delete an existing component");
};

module.exports = {
  getComponents,
  getComponent,
  createComponent,
  updateComponent,
  deleteComponent,
};
  