const express = require("express")
const app = express()
const port = 3000

// Function to return a welcome message
function getWelcomeMessage() {
  return "Welcome to our service!"
}
// Endpoint 1: Return a welcome message
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
