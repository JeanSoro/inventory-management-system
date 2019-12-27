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
        products.img_url,
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

  async store({
    request,
    response
  }) {
    try {
      const post = request.post();
      const order = await Database.raw(`

      INSERT INTO orders (f_name, l_name, address, address2, city, state, country, payment_type, user_id)
      VALUES(${SqlString.escape(post.form.f_name)},
      ${SqlString.escape(post.form.l_name)}, 
      ${SqlString.escape(post.form.address)}, 
      ${SqlString.escape(post.form.address2)}, 
      ${SqlString.escape(post.form.city)}, 
      ${SqlString.escape(post.form.state)}, 
      ${SqlString.escape(post.form.country)}, 
      ${SqlString.escape(post.form.payment_type)}, 
      ${parseInt(1)});
      
      `)

      const order_id = order[0].insertId

      return {
        post,
        order_id: order[0].insertId
      }
      return response.redirect('/admin/products')

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }
  }





}

module.exports = ProductController
