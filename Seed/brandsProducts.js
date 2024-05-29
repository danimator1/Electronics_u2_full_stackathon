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
      image: {url: 'https://i5.walmartimages.com/asr/9cc99ad3-a77c-4e05-b9b0-d5a486fb9652.da209114ec2d616b499c892bd751d4eb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'},
      brand: brand1._id
    },
    {
      title: 'Google Pixel 8a 5G 128GB',
      description: 'Google Pixel 8a 5G 128GB: Advanced features and connectivity at an excellent value.',
      price: '499',
      image: {url: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_fd7b980f-651f-456b-b814-52039b3fd935%3Fwid%3D1000%26hei%3D1000_large.webp'},
      brand: brand2._id
    },
    {
      title: 'Motorola moto g power 2024 5G 128GB',
      description: 'Motorola moto g power 2024 5G 128GB: Reliable performance with long-lasting battery life.',
      price: '279',
      image: {url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572573cv16d.jpg'},
      brand: brand3._id
    },
    {
      title: 'Samsung Galaxy Z Fold5 256GB',
      description: 'Samsung Galaxy Z Fold5 256GB: Innovative foldable design with expansive storage.',
      price: '1499',
      image: {url: 'https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw7d52c53d/images/064/88/64885346-2.jpg?sw=1000&sh=1000&sm=fit'},
      brand: brand4._id
    },
    {
      title: 'Apple iPhone SE',
      description: 'Apple iPhone SE: Compact design with powerful performance.',
      price: '429',
      image: {url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg'},
      brand: brand1._id
    },
    {
      title: 'Motorola edge 2023 256GB',
      description: 'Motorola Edge 2023 256GB: Cutting-edge features with ample storage.',
      price: '349',
      image: {url: 'https://i5.walmartimages.com/seo/motorola-edge-2023-512GB-Unlocked_ec122b25-21d5-46f2-a408-37765bc2c63e.1f5229176b433a3e02cc2d043a1bb897.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'},
      brand: brand3._id
    },
    {
      title: 'Apple PreOwned iPhone SE',
      description: 'PreOwned iPhone SE: Affordable performance in a compact form.',
      price: '189',
      image: {url: 'https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/ec57720d-013c-4e70-9566-a0e628c3c1f8-1_19f5257b-0491-48d2-a58b-df5743e77e9d.jpg'},
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