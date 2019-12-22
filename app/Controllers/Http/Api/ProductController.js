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

      SELECT products.id,
        products.title,
        products.sku,
        brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        products.material,
        products.qty,
        products.size,
        products.user_id,
        products.created_at
        FROM products
        INNER JOIN brands
        ON products.brand_id = brands.id
        INNER JOIN users
        ON products.user_id = users.id
        ORDER BY created_at ASC
      
      `)
      allProducts = allProducts[0] //results

      return allProducts


    } catch (error) {
      console.log(error)
      return response.redirect('back')
      // return `<h1 style="color: red">Sorry, there was an error</h1>
      // <h3>${error.sqlMessage}</h3>`
    }

  }
}

module.exports = ProductController
