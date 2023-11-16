import express from 'express'
import ProductManager from '../../ejercicio02/manager/ProductManager.js'

const productManager = new ProductManager(
  '../../ejercicio02/files/products.json'
)

const PORT = 8080

const app = express()

let product = {
  title: 'Producto Uno',
  description: 'Descripcion del producto uno',
  price: 100,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
  code: '0001',
  stock: 10,
}

let productDos = {
  title: 'Producto Dos',
  description: 'Descripcion del producto dos',
  price: 200,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
  code: '0002',
  stock: 20,
}

await productManager.addProduct(product)
await productManager.addProduct(productDos)

const products = await productManager.getProducts()

app.get('/products', (req, res) => {
  const limit = req.query.limit

  if (!limit || limit === undefined) {
    res.status(200).json(products)
  } else {
    const productsLimit = products.slice(0, limit)
    res.status(200).json(productsLimit)
  }
})

app.get('/products/:idProduct', (req, res) => {
  const { idProduct } = req.params

  const product = products.find((product) => product.id === parseInt(idProduct))
  if (!product) {
    res.status(404).json({
      error: 'Producto no encontrado',
    })
  }
  res.status(200).json(product)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
