'use strict'

const Schema = use('Schema')

class CreateProductsSchema extends Schema {
  up() {
    this.raw(`CREATE TABLE products(
    
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    sku VARCHAR(60) NOT NULL,
    material VARCHAR(60) NOT NULL,
    description TEXT NOT NULL,
    brand_id INT UNSIGNED,
    qty INT UNSIGNED,
    size FLOAT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`)

  }

  down() {
    this.raw(`DROP TABLE products`)
  }
}

module.exports = CreateProductsSchema
