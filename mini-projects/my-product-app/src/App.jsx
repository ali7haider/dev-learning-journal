import React from 'react';
import ProductCard from './components/ProductCard';
import SimpleForm from './components/SimpleForm';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop for developers',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Headphones',
    price: 150,
    description: 'Noise-cancelling over-ear headphones',
    image: 'https://via.placeholder.com/150'
  }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Product List</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map(product=>{
          return <ProductCard key={product.id} product={product} />
        })}

          <SimpleForm />

      </div>
    </div>
  );
}

export default App;
