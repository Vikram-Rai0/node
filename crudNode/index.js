// Import the express module
import express from "express";
import postRoute from "./routers/postRoute.js";

// // Create an Express application
const app = express();

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// ============================================================================================================

// // POST request handler for the /post route
// // When a POST request is made to /post, this function will handle it
// app.post("/post", (req, res) => {
//   // Extract the JSON data from the request body
//   const data = req.body;

//   // Send the extracted data back as the response
//   // This is useful for confirming what data was received
//   res.send(data);
// });
// ==================================================================================================================
app.use("/", postRoute);
// Define the port number on which the server will listen for requests
const port = 5555;

// Start the server and listen on the specified port
// When the server starts, it logs a message to the console
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
