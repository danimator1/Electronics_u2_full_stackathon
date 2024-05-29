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

app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.deleteOne({ _id: id });
    if (deletedProduct.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/brand/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBrand = await Brand.deleteOne({ _id: id });
    if (deletedBrand.deletedCount === 0) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    res.json({ message: 'Brand deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /product
app.post('/product', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: 'Product created successfully', newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /brand
app.post('/brand', async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.status(201).json({ message: 'Brand created successfully', newBrand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })