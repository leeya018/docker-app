// app.js
const express = require("express");
const app = express();

// Define the port for the service
// const PORT = process.env.PORT || 3000;

// Create a simple route
app.get("/items/:id", (req, res) => {
  res.send((req.params.id * 3).toString()); // Send the result as a string
});

// Start the server
app.listen(3000, "0.0.0.0", () => {
  console.log(`Service is running on port ${3000}`);
});
