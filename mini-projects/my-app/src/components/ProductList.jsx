
import React from 'react';


const ProductList=({products,setEditingProduct,deleteProduct})=>{
    return (
        <div>
            <h2>Product Lists</h2>
            {products.length === 0 ? 
            (<p>no product available</p>) :
            (
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.price}
                        <button onClick={()=>setEditingProduct(product)}>Edit</button>
                        <button onClick={()=>deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            ) }
        </div>
    )
};
export default ProductList