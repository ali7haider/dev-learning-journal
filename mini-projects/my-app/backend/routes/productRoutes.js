const express = require('express');
const router= express.Router();
const {getProducts,addProduct,removeProduct,editProduct} =require('../controllers/productController') 



router.get('/',getProducts);
router.post('/',addProduct)
router.delete('/:id', removeProduct);
router.put('/:id', editProduct);


module.exports = router;
 