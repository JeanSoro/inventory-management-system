'use strict'

const Schema = use('Schema')

class AddColumnToBrandsSchema extends Schema {
  up() {
    this.raw(`ALTER TABLE brands
      ADD COLUMN img_url TEXT AFTER title`)
  }

  down() {
    this.raw(`
      ALTER TABLE brands
      DROP COLUMN img_url
    `)
  }
}

module.exports = AddColumnToBrandsSchema
