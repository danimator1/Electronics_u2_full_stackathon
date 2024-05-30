// Search Bar 
const searchBar = document.getElementById('searchBar')
const searchBtn = document.getElementById('searchBtn')
// Display
const productImage = document.getElementById('productImg')
const productTitle = document.getElementById('product-title')
const productBrand = document.getElementById('product-brand')
const productDescription = document.getElementById('product-description')
const productPrice = document.getElementById('product-price')



searchBtn.addEventListener('click', async (e)=> {
  e.preventDefault()
    const input = document.getElementById('searchBar').value
    console.log(input)
    let url = `http://localhost:3001/product/${input}`
    console.log(url)

    let response = await axios.get(url) 
    console.log(response.data)
    // Product Image
    let productImg = response.data.image
    productImage.setAttribute('src', productImg)
    console.log(productImg)
    // Product Name
    let productName = response.data.title 
    productTitle.innerHTML = productName
    // Product Brand
    // let brandName = response.data.brand
    // productBrand.innerHTML = brandName

    // Product Description
    let productDes = response.data.description 
    productDescription.innerHTML = productDes

    // Product Price
    let productPri = response.data.price 
    productPrice.innerText = '$ ' + productPri
 })