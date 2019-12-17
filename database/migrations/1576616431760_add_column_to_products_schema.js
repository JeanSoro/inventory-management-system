'use strict'

const Schema = use('Schema')

class AddColumnToProductsSchema extends Schema {
  up() {
    this.raw(`
      ALTER TABLE products
      ADD COLUMN img_url MEDIUMTEXT AFTER sku;
    
    `)

  }

  down() {
    this.raw(`
      ALTER TABLE products
      DROP COLUMN img_url;
    
    `)
  }
}

module.exports = AddColumnToProductsSchema
