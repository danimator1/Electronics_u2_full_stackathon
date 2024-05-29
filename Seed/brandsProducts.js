const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    name: 'Apple',
    url: 'https://www.apple.com'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'Google',
    url: 'https://www.google.com'
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Dish',
    url: 'https://www.dishwireless.com/home'
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'Samsung',
    url: 'https://www.samsung.com/us/'
  })
  brand4.save()


  const products = [
    {
      title: 'Apple PreOwned iPhone 13 Pro Max 5G 128GB',
      description: 'PreOwned iPhone 13 Pro Max 5G 128GB: Premium performance at a great value.',
      price: '779',
      brand: brand1._id
    },
    {
      title: 'Google Pixel 8a 5G 128GB',
      description: 'Google Pixel 8a 5G 128GB: Advanced features and connectivity at an excellent value.',
      price: '499',
      brand: brand2._id
    },
    {
      title: 'Motorola moto g power 2024 5G 128GB',
      description: 'Motorola moto g power 2024 5G 128GB: Reliable performance with long-lasting battery life.',
      price: '279',
      brand: brand3._id
    },
    {
      title: 'Samsung Galaxy Z Fold5 256GB',
      description: 'Samsung Galaxy Z Fold5 256GB: Innovative foldable design with expansive storage.',
      price: '1499',
      brand: brand4._id
    },
    {
      title: 'Apple iPhone SE',
      description: 'Apple iPhone SE: Compact design with powerful performance.',
      price: '429',
      brand: brand1._id
    },
    {
      title: 'Motorola edge 2023 256GB',
      description:
        'Motorola Edge 2023 256GB: Cutting-edge features with ample storage.',
      price: '349',
      brand: brand3._id
    },
    {
      title: 'Apple PreOwned iPhone SE',
      description: 'PreOwned iPhone SE: Affordable performance in a compact form.',
      price: '189',
      brand: brand1._id
    }
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()