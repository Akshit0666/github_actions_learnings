// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send(" Hello from Node.js app running in Docker!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
