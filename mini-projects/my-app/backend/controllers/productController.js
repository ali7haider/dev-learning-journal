const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Products" });
  }
};

const addProduct = async (req,res) => {
    try {
        const newProduct= await Product.create(req.body);
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json({ error: "Failed to add Product" });

    }
};
const removeProduct = async (req, res) => {
    try {
    await Product.destroy({ where: { id: req.params.id } });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  };
  const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.update(req.body, { where: { id } });
        const updated = await Product.findByPk(id);
        res.json(updated);
    
    } catch (err) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  };
  
  

module.exports = {
  getProducts,addProduct,removeProduct,editProduct
};
