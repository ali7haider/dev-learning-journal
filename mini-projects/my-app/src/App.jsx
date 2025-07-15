import { useState } from 'react'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

import './App.css'

function App() {
  const [products,setProduct]=useState([])
  const [editingProduct,setEditingProduct]=useState(null)
  const addProduct=(product)=>{
    setProduct([...products,{...product}]);
  }

  const deleteProduct=(id)=>{
    setProduct(products.filter((product)=>product.id!==id))
  }
  const updateProduct = (updatedProduct) => {
    setProduct(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };
  
  return (
    <>
      <div>
        <h1>Product CRUD App</h1>
        <ProductForm addProduct={addProduct} editingProduct={editingProduct} updateProduct={updateProduct}/>
        <ProductList products={products} setEditingProduct={setEditingProduct} deleteProduct={deleteProduct}/>


      </div>
    </>
  )
}

export default App
