import React from "react";

function ProductCard({product}){
return (
    <div style={{border:'1px solid #ccc',padding:'15px',width:'200px'}}>
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ${product.price}</p>

    </div>
);

}

export default ProductCard;
