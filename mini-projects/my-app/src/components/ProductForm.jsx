import React, { useState, useEffect } from 'react';

const ProductForm=({addProduct,editingProduct,updateProduct})=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('')

    useEffect(()=>{
        if (editingProduct){
            setName(editingProduct.name)
            setPrice(editingProduct.price)
        }
    },[editingProduct])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name || !price) return
        const newProduct= {
            name,
            price

        }
        if (editingProduct){
            updateProduct(newProduct)
        }
        else{

            addProduct(newProduct)
        }

        setName('')
        setPrice('')
    }


    return(
        <form onSubmit={handleSubmit}>
            <h3>{editingProduct ? 'Edit' : 'Add'} Product</h3>

            <input type="text" placeholder='Enter Product Name' value={name} onChange={(e=>setName(e.target.value))}/>
            <input type="number" placeholder='Enter Product Price' value={price} onChange={(e=>setPrice(e.target.value))}/>
            <button type="submit">{editingProduct ? 'Update' : 'Add'}Product</button>
        </form>


    )
};

export default ProductForm