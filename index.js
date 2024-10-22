const express = require("express")
const app = express()
const port = 3000

// Function to Given username generate a GitHub profile URL for the user
function geterateProfileUrl(username) {
  let result = "https://github.com/" + username
  return result
}
// Endpoint 1: Given username generate a GitHub profile URL for the user
app.get("/github-profile", (req, res) => {
  let username = req.query.username
  res.send(geterateProfileUrl(username))
})

// Generate Certificate
function generateCertificate(fristName, lastName, courseName) {
  let result =
    "This result is awarded to " +
    fristName +
    " " +
    lastName +
    " for completing the course" +
    courseName
  return result
}
// Endpoint 2: Generate Certificate
app.get("/certificate", (req, res) => {
  let fristName = req.query.fristName
  let lastName = req.query.lastName
  let courseName = req.query.courseName
  res.send(generateCertificate(fristName, lastName, courseName))
})

// Calculate grade
function calculateGrade(maths, science, english) {
  let gradeInPercentage = ((maths + science + english) / 300) * 100
  return "Your grade in percentage is " + gradeInPercentage + "%"
}
// Endpoint 3: Calculate grade
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths)
  let science = parseInt(req.query.science)
  let english = parseInt(req.query.english)

  res.send(calculateGrade(maths, science, english))
})

// Split Bill
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends
  return "Result: Each friend owes Rs. " + splitAmount + " against the bill"
}
// Endpoint 4: Split bill
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount)
  let numberOfFriends = parseInt(req.query.numberOfFriends)
  res.send(splitBill(billAmount, numberOfFriends))
})

// Calculate Salary
function calculateSalary(totalHours, hourlyWage) {
  let monthlySa1ary = hourlyWage * totalHours
  return "Result: Your monthly salary is ₹" + monthlySa1ary
}
// Endpoint 5: Calculate Salary
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours)
  let hourlyWage = parseInt(req.query.hourlyWage)
  res.send(calculateSalary(totalHours, hourlyWage))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
