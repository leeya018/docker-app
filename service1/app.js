// app.js
const express = require("express");
const app = express();

// Define the port for the service
// const PORT = process.env.PORT || 3000;

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello, this is your simple Express microservice!");
});

// Start the server
app.listen(3000, "0.0.0.0", () => {
  console.log(`Service is running on port ${3000}`);
});
