import ProductManager from './manager/ProductManager.js'

const productManager = new ProductManager()

const env = async () => {
  let products = await productManager.getProducts()

  let product = {
    title: 'Producto Uno',
    description: 'Descripcion del producto uno',
    price: 100,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
    code: '0001',
    stock: 10,
  }
  products = await productManager.addProduct(product)

  const productIdToUpdate = 1
  const productToUpdate = {
    title: 'Producto Uno',
    description: 'Descripcion del producto uno',
    price: 100,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
    code: '0001',
    stock: 20,
  }
  products = await productManager.updateProduct(
    productIdToUpdate,
    productToUpdate
  )

  products = await productManager.deleteProduct(1)

  
}

env()
