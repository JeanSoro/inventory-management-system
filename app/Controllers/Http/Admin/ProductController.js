'use strict'
const Database = use('Database')
const SqlString = require('sqlstring')

class ProductController {

  async index({
    view,
    request,
    response
  }) {
    try {
      let allProducts = await Database.raw(`

      SELECT * FROM products
      
      `)
      allProducts = allProducts[0] //results

      return view.render('admin/products/all', {
        allProducts
      })

    } catch (error) {
      console.log(error)
      return response.redirect('back')
      // return `<h1 style="color: red">Sorry, there was an error</h1>
      // <h3>${error.sqlMessage}</h3>`
    }

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
      return response.redirect('/admin/products')

    } catch (error) {
      console.log(error)
      return response.redirect('back')
      // return `<h1 style="color: red">Sorry, there was an error</h1>
      // <h3>${error.sqlMessage}</h3>`
    }


  }
  create({
    view,
    request,
    response
  }) {
    return view.render('admin/products/create')
  }
  show({
    view,
    request,
    response
  }) {
    return view.render('admin/products/show')
  }
  edit({
    view,
    request,
    response
  }) {
    return view.render('admin/products/edit')
  }
  update({
    request,
    response
  }) {

  }
  delete({
    request,
    response
  }) {

  }
}

module.exports = ProductController
