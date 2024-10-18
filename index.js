const express = require("express")
const app = express()
const port = 3010

// Endpoint 1: To shout name in uppercase
app.get("/shout", (req, res) => {
  let name = req.query.name
  let upperCaseName = name.toUpperCase()
  res.send(upperCaseName)
})

// Endpoint 2: Concatenate firstName and lastName to return full name
app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName
  let lastName = req.query.lastName
  let fullName = firstName + " " + lastName
  res.send(fullname)
})

// Endpoint 3: Concatenate month and year to return a formatted date
app.get("/date", (req, res) => {
  let month = req.query.month
  let year = req.query.year
  let formattedDate = month + ", " + year
  res.send(formattedDate)
})

// Endpoint 4: Return a greeting with the given name
app.get("/greet", (req, res) => {
  let name = req.query.name
  let greeting = "Namaste, " + name + "!"
  res.send(greeting)
})

/// Endpoint 5: Return a formatted address
app.get("/address", (req, res) => {
  let street = req.query.street
  let city = req.query.city
  let state = req.query.state
  let address = street + ", " + city + ", " + state
  res.send(address)
})

// Endpoint 6: Return a formatted email
app.get("/email", (req, res) => {
  let username = req.query.username
  let domain = req.query.domain
  let email = username + "@" + domain
  res.send(email)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
