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

let book = {
  title: "The God of Small Things",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
}

// Endpoint 1: Return the book Object
app.get("/book", (req, res) => {
  res.json(book)
})

// Function to get the full title and author of the book
function getFullTitleAndAuthor(person) {
  return person.title + " by " + person.author
}
// Endpoint 2: Access the full title and author of the book
app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAndAuthor = getFullTitleAndAuthor(book)
  res.json({ fullTitleAndAuthor: fullTitleAndAuthor })
})

// Function to get the genre and availability of the book
function getGenreAndAvailability(book) {
  return {
    genre: book.genre,
    isAvailable: book.isAvailable,
  }
}
// Endpoint 3: Access Just the First Name and Gender of the Person
app.get("/book/genre-availability", (req, res) => {
  let genreAndAvailability = getGenreAndAvailability(book)
  res.json(genreAndAvailability)
})

// Function to calculate how old the book is
function calculateBookAge(book) {
  let currentYear = 2024
  return currentYear - book.publicationYear
}
// Endpoint 4: Calculate and return the age of the book
app.get("/book/age", (req, res) => {
  let bookAge = calculateBookAge(book)
  res.json(bookAge)
})

// Function to get a summary of the book
function getBookSummary(book) {
  return (
    "Title: " +
    book.title +
    ", Author: " +
    book.author +
    ", Genre: " +
    book.genre +
    ", Published: " +
    book.publicationYear
  )
}
// Endpoint 5: Return the Full Name and Membership Status of the Person
app.get("/book/summary", (req, res) => {
  let summary = getBookSummary(book)
  res.json({ summary: summary })
})

// Function to check stock and determine if an order is needed
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: "In Stock", stock: book.stock }
  } else {
    return { status: "Out of Stock", message: "Order is required" }
  }
}
// Endpoint 6: Check stock and order status
app.get("/book/stock-status", (req, res) => {
  let stockStatus = checkStockAndOrder(book)
  res.json(stockStatus)
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
