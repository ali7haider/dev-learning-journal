import { useEffect, useState } from 'react'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

import './App.css'

function App() {
  const [products,setProducts]=useState([])
  const [editingProduct,setEditingProduct]=useState(null)


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const addProduct=(product)=>{
    fetch('http://localhost:5000/api/products',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)

    })
    .then(res=>res.json())
    .then(newProduct=>setProducts([...products,newProduct]))
    .catch(err => console.error('Failed to add product:', err));
  }

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(err => console.error('Failed to delete product:', err));
  };

  const updateProduct = (updatedProduct) => {
    fetch(`http://localhost:5000/api/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then((resUpdatedProduct) => {
        setProducts(products.map(p =>
          p.id === resUpdatedProduct.id ? resUpdatedProduct : p
        ));
        setEditingProduct(null);
      })
      .catch(err => console.error('Failed to update product:', err));
  };

  
  return (
    <>
      <div>
        <h1>Product CRUD App (with PostgreSQL)</h1>
        <ProductForm addProduct={addProduct} editingProduct={editingProduct} updateProduct={updateProduct}/>
        <ProductList products={products} setEditingProduct={setEditingProduct} deleteProduct={deleteProduct}/>


      </div>
    </>
  )
}

export default App
