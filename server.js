const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Product, Brand } = require('./Models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/product', async (req, res) => {
  const product = await Product.find({})
  res.json(product)
})

app.get('/product/:id', async (req, res) => {

  try{
  const { id } = req.params
  const product = await Product.findById(id)
  if(!product) throw Error ('product not found')
  res.json(product)
  } catch (e) {
    console.log(e)
    res.send('404 Product not')
  }
})


app.get('/brand', async (req, res) => {
  const brands = await Brand.find({})
  res.json(brands)
})
app.get('/brand/:id', async (req, res) =>{
  try{
  const { id }= req.params
  const brand = await Brand.findById(id)
  if(!brand) throw Error ('Brand not found')
  res.json(brand)
  } catch (e) {
      console.log(e)
      res.send('404 Brand not found')
  }
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })