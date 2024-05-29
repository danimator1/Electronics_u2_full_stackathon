const mongoose = require('mongoose')


const Product = mongoose.model('Product', productSchema)
const Brand = mongoose.model('Brand', brandSchema)

module.exports = {
  Product,
  Brand
}