// Exporting the post function
// This allows the function to be used in other files that import it
export const post = (req, res) => {
  // Extract the JSON data from the request body
  const data = req.body;

  // Log the received data to the console
  // This is useful for debugging and seeing what data was sent in the request
  console.log(data);
  res.send({ message: "post request complelt.." });
};
