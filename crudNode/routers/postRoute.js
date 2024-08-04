// Import the express module
import express from "express";

// Import the post function from the Post controller
import { post } from "../controller/Post.js";

// Create a new router instance
const router = express.Router();

// Define a route for POST requests to /post
// The post function will handle these requests
router.post("/post", post);

// Export the router as the default export
export default router;
