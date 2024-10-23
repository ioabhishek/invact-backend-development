const express = require("express")
const app = express()
const port = 3000

//  Calculate the total price of items in the cart
function cartTotalAmount(newItemPrice, cartTotal) {
  return newItemPrice + cartTotal
}
// Endpoint 1:  Calculate the total price of items in the cart
app.get("/cart-total", (req, res) => {
  const newItemPrice = parseFloat(req.query.newItemPrice)
  const cartTotal = parseFloat(req.query.cartTotal)
  res.send(cartTotalAmount(newItemPrice, cartTotal).toString())
})

// Apply a discount based on membership status
function applyDiscount(cartTotal, isMember) {
  const discountPercentage = 10
  let finalPrice = cartTotal
  if (isMember) {
    finalPrice = cartTotal - (cartTotal * discountPercentage) / 100
  }
  return finalPrice
}
// Endpoint 2: Apply a discount based on membership status
app.get("/membership-discount", (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal)
  const isMember = req.query.isMember === "true"
  res.send(applyDiscount(cartTotal, isMember).toString())
})

// Calculate tax on the cart total
function calculateTax(cartTotal) {
  let taxPercentage = 5
  let calculatedTex = (cartTotal * taxPercentage) / 100
  return calculatedTex
}
// Endpoint 3 : Calculate tax on the cart total
app.get("/calculate-tax", (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal)
  res.send(calculateTax(cartTotal).toString())
})

// Estimate delivery time based on shipping method
function estimateDeliveryTime(shippingMethod, distance) {
  let result
  if (shippingMethod === "standard") {
    result = distance / 50
  } else if (shippingMethod === "express") {
    result = distance / 100
  }
  return result
}
// Endpoint 4 : Estimate delivery time based on shipping method
app.get("/estimate-delivery", (req, res) => {
  const shippingMethod = req.query.shippingMethod
  const distance = parseFloat(req.query.distance)
  res.send(estimateDeliveryTime(shippingMethod, distance).toString())
})

// Calculate the shipping cost based on weight and distance
function calculateShippingCost(weight, distance) {
  let result = weight * distance * 0.1
  return result
}
// Endpoint 5 : Calculate the shipping cost based on weight and distance
app.get("/shipping-cost", (req, res) => {
  const weight = parseFloat(req.query.weight)
  const distance = parseFloat(req.query.distance)
  res.send(calculateShippingCost(weight, distance).toString())
})

// Calculate loyalty points earned from a purchase
function calculateLoyalPoints(purchaseAmount) {
  const pointsMultiplier = 2
  let loyaltyPoints = purchaseAmount * pointsMultiplier
  return loyaltyPoints
}
// Endpoint 6 : Calculate loyalty points earned from a purchase
app.get("/loyalty-points", (req, res) => {
  const purchaseAmount = parseFloat(req.query.purchaseAmount)
  res.send(calculateLoyalPoints(purchaseAmount).toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
