'use strict'
const Database = use('Database')
const SqlString = require('sqlstring')

class ProductController {

  index({
    view
  }) {
    return view.render('admin/products/all')
  }
  async store({
    request,
    response
  }) {
    try {
      const post = request.post();
      await Database.raw(`

      INSERT INTO products (title, sku, material, description, brand_id, qty, size, user_id)
      VALUES(${SqlString.escape(post.title)}, ${SqlString.escape(post.sku)}, ${SqlString.escape(post.material)}, ${SqlString.escape(post.description)}, ${parseInt(1)}, ${SqlString.escape(post.qty)}, ${SqlString.escape(post.size)}, ${parseInt(1)})
      `)
      return `<h1 style="color: green">Saved successfully</h1>`

    } catch (error) {
      console.log(error)
      return `<h1 style="color: red">Sorry, there was an error</h1>
      <h3>${error.sqlMessage}</h3>`
    }


  }
  create({
    view
  }) {
    return view.render('admin/products/create')
  }
  show({
    view
  }) {
    return view.render('admin/products/show')
  }
  edit({
    view
  }) {
    return view.render('admin/products/edit')
  }
  update() {

  }
  delete() {

  }
}

module.exports = ProductController
