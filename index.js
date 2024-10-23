const express = require("express")
const app = express()
const port = 3000

//  Calculate the Returns of the Stocks added
function calculateReturns(boughtAt, marketPrice, quantity) {
  let result = (marketPrice - boughtAt) * quantity
  return result
}
// Endpoint 1:  Calculate the Returns of the Stocks added
app.get("/calculate-returns", (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt)
  const marketPrice = parseFloat(req.query.marketPrice)
  const quantity = req.query.quantity
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString())
})

// Calculate the Returns of the Stocks added
function totalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4
}
// Endpoint 2: Calculate the Returns of the Stocks added
app.get("/total-returns", (req, res) => {
  const stock1 = parseFloat(req.query.stock1)
  const stock2 = parseFloat(req.query.stock2)
  const stock3 = parseFloat(req.query.stock3)
  const stock4 = parseFloat(req.query.stock4)
  res.send(totalReturns(stock1, stock2, stock3, stock4).toString())
})

// Calculate the Return Percentage
function calculateReturnPercentage(boughtAt, returns) {
  let returnPercentage = ((returns - boughtAt) / boughtAt) * 100
  return returnPercentage
}
// Endpoint 3:  Calculate the Return Percentage
app.get("/calculate-return-percentage", (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt)
  const returns = parseFloat(req.query.returns)
  res.send(calculateReturnPercentage(boughtAt, returns).toString())
})

// Calculate the Total Return Percentage
function totalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4
}
// Endpoint 4: Calculate the Total Return Percentage
app.get("/total-return-percentage", (req, res) => {
  const stock1 = parseFloat(req.query.stock1)
  const stock2 = parseFloat(req.query.stock2)
  const stock3 = parseFloat(req.query.stock3)
  const stock4 = parseFloat(req.query.stock4)
  res.send(totalReturnPercentage(stock1, stock2, stock3, stock4).toString())
})

// Identify the Status of Stocks based on their Return Value
function checkReturnPercentage(returnPercentage) {
  let result = ""

  if (returnPercentage > 0) {
    result = "Profit"
  } else {
    result = "Loss"
  }
  return result
}
// Endpoint 5 : Identify the Status of Stocks based on their Return Value
app.get("/status", (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage)
  res.send(checkReturnPercentage(returnPercentage).toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
