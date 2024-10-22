const express = require("express")
const app = express()
const port = 3000

// Function to return a welcome message
function geterateProfileUrl(username) {
  let result = "https://github.com/" + username
  return result
}
// Endpoint 1: Return a welcome message
app.get("/github-profile", (req, res) => {
  let username = req.query.username
  res.send(geterateProfileUrl(username))
})

// Function to return a greeting message
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
// Endpoint 2: Take a username and return a greeting message
app.get("/certificate", (req, res) => {
  let fristName = req.query.fristName
  let lastName = req.query.lastName
  let courseName = req.query.courseName
  res.send(generateCertificate(fristName, lastName, courseName))
})

// Function to check if a person has
function calculateGrade(maths, science, english) {
  let gradeInPercentage = ((maths + science + english) / 300) * 100
  return "Your grade in percentage is " + gradeInPercentage + "%"
}
// Endpoint 3: Take the years of experience in functions and return a message
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths)
  let science = parseInt(req.query.science)
  let english = parseInt(req.query.english)

  res.send(calculateGrade(maths, science, english))
})

// Function to return the time the student can dedicate to learn functions
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends
  return "Result: Each friend owes Rs. " + splitAmount + " against the bill"
}
// Endpoint 4: Take the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount)
  let numberOfFriends = parseInt(req.query.numberOfFriends)
  res.send(splitBill(billAmount, numberOfFriends))
})

// Function to return the modules completion message
function calculateSalary(totalHours, hourlyWage) {
  let monthlySa1ary = hourlyWage * totalHours
  return "Result: Your monthly salary is ₹" + monthlySa1ary
}
// Endpoint 5: Take a username and a boolean indicating module completion status, return a message if the student has completed the modules or not
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours)
  let hourlyWage = parseInt(req.query.hourlyWage)
  res.send(calculateSalary(totalHours, hourlyWage))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
