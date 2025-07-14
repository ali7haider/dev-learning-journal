import React from "react";

function ProductCard({product}){
return (
    <div style={{border:'1px solid #ccc',padding:'15px',width:'200px'}}>
        <img src="product.img" alt="product.name" style={{width:'100%'}}/>
        <h3>{product.name}</h3>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>

    </div>
);

}

export default ProductCard;
