const express = require("express");
const componentRouter = require("./routes/componentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/components", componentRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});