import { getStockData } from './fakeStockAPI.js'

setInterval(function() {
    const stockData = getStockData()
    renderStockTicker(stockData)
},1500)

let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.querySelector("#name")
    const stockDisplaySymbol = document.querySelector("#symbol")
    const stockDisplayPrice = document.querySelector("#price")
    const stockDisplayTime = document.querySelector("#time")


const { name, sym, price, time } = stockData

let priceDirection = price > prevPrice ? '🔼' : price < prevPrice ? '🔽' : '▶️'

stockDisplayName.innerText = "Name: " + name
stockDisplaySymbol.innerText = "Symbol: " + sym
stockDisplayPrice.innerText = "Price: " + price + priceDirection
stockDisplayTime.innerText = "Time: " + time

prevPrice = price
}