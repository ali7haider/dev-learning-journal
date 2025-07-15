const db = require('../db');

class Product {
  static async getAllProduct() {
    const result = await db.query('SELECT * FROM products');
    return result.rows;
  }

  static async addProductToDB(name,price) {
    
    const result = await db.query(
        'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
        [name, price]
      );
      return result.rows[0];
    
  }
  static async deleteProduct (id){
    await db.query('DELETE FROM products WHERE id = $1', [id]);
  };
  
  static async updateProduct  (id, name, price) {
    const result = await db.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
      [name, price, id]
    );
    return result.rows[0];
  };
  
}

module.exports = { Product };
