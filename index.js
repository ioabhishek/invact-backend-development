const express = require("express")
const app = express()
const port = 3000

// Define an object on the server: person
let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "male",
  age: 30,
  isMember: true,
}

// Endpoint 1: Return the Person Object
app.get("/person", (req, res) => {
  res.json(person)
})

// Function to get the full name of the person
function getFullName(person) {
  return person.firstName + " " + person.lastName
}
// Endpoint 2: Access the Full Name of the Person
app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person)
  res.json({ fullName: fullName })
})

// Access Just the First Name and Gender of the Person
function getFirstNameAndGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  }
}
// Endpoint 3: Access Just the First Name and Gender of the Person
app.get("/person/firstname-gender", (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person)
  res.json({ firstNameAndGender })
})

// Increment the Age of the Person and Return the Updated Object
function incrementAge(person) {
  person.age += 1
  return person
}
// Endpoint 4: Increment the Age of the Person and Return the Updated Object
app.get("/person/increment-age", (req, res) => {
  let updatePerson = incrementAge(person)
  res.json(updatePerson)
})

// Return the Full Name and Membership Status of the Person
function getFullNameAndMembership(person) {
  return {
    fullName: getFullName(person),
    isMember: person.isMember,
  }
}
// Endpoint 5: Return the Full Name and Membership Status of the Person
app.get("/person/fullname-membership", (req, res) => {
  let fullNameAndNembership = getFullNameAndMembership(person)
  res.json(fullNameAndNembership)
})

// Function to calculate final price with discount for members
function getFinalPrice(cartTotal, isMember) {
  let discount = 0.1
  let finalPrice
  if (isMember) {
    finalPrice = cartTotal * (1 - discount)
  } else {
    finalPrice = cartTotal
  }
  return { finalPrice: finalPrice.toFixed(2) }
}
// Endpoint 6: Return the Full Name and Membership Status of the Person
app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal)
  let finalPrice = getFinalPrice(cartTotal, person.isMember)
  res.json(finalPrice)
})

// Function to calculate Shipping Cost Based on Cart Total and Membership Status
function getShippingCost(cartTotal, isMember) {
  let shippingCost
  if (cartTotal > 500 && isMember) {
    shippingCost = 0
  } else {
    shippingCost = 99
  }
  return { shippingCost: shippingCost.toFixed(2) }
}
// Endpoint 8: Get shipping cost based on cart total and membership status\
app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal)
  let shippingCost = getShippingCost(cartTotal, person.isMember)
  res.json(shippingCost)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
