class ProductManager {
  constructor() {
    this.products = []
  }

  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product

    if (
      title != null &&
      description != null &&
      price != null &&
      thumbnail != null &&
      code != null &&
      stock != null
    ) {
      const productExists = this.products.find((prod) => prod.code === code)
      if (!productExists) {
        const newProduct = {
          id: this.products.length + 1,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        }
        this.products.push(newProduct)
      }
    }
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {
    const product = this.products.find((prod) => prod.id === id)
    if (!product) {
      return 'Not Found'
    }
    return product
  }
}


// Creo una instancia del productManager
const productManager = new ProductManager()


// Creo el primer producto a agregar en el productManager
const productoUno = {
  title: 'Producto Uno',
  description: 'Descripcion del producto uno',
  price: 100,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
  code: '0001',
  stock: 10,
}

// Creo el segundo producto a agregar en el productManager
const productoDos = {
  title: 'Producto Dos',
  description: 'Descripcion del producto dos',
  price: 200,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
  code: '0002',
  stock: 20,
}

// Creo el tercer producto a agregar en el productManager pero con una propiedad menos por lo tanto no lo debe agregar
const productoTres = {
  title: 'Producto Tres',
  description: 'Descripcion del producto tres',
  price: 300,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png',
  code: '0003',
}

// Agrego los tres productos (solo dos se van a agregar)

productManager.addProduct(productoUno)
productManager.addProduct(productoDos)
productManager.addProduct(productoTres)

// Muestro por consola los datos

console.log(productManager.getProducts())
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(3))
