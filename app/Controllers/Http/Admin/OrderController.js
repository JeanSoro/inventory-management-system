'use strict'

const Database = use('Database')
const SqlString = require('sqlstring')

class OrderController {
  async index({
    view,
    request,
    response
  }) {
    try {
      // let allOrders = await Database.raw(`

      // SELECT orders.id,
      //   orders.title,
      //   orders.sku,
      //   brands.title as brand,
      //   concat(users.f_name, ' ', users.l_name) as user,
      //   orders.material,
      //   orders.qty,
      //   orders.size,
      //   orders.user_id,
      //   orders.created_at
      //   FROM orders
      //   INNER JOIN brands
      //   ON orders.brand_id = brands.id
      //   INNER JOIN users
      //   ON orders.user_id = users.id
      //   ORDER BY created_at ASC

      // `)
      let allOrders = '' //results

      return view.render('admin/orders/all', {
        allOrders
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

      INSERT INTO orders (title, sku, img_url, material, description, brand_id, qty, size, user_id)
      VALUES(${SqlString.escape(post.title)}, ${SqlString.escape(post.sku)}, ${SqlString.escape(post.img_url)}, ${SqlString.escape(post.material)}, ${SqlString.escape(post.description)}, ${SqlString.escape(post.brand_id)}, ${SqlString.escape(post.qty)}, ${SqlString.escape(post.size)}, ${parseInt(1)})
      `)
      return response.redirect('/admin/orders')

    } catch (error) {
      console.log(error)
      return response.redirect('back')
      // return `<h1 style="color: red">Sorry, there was an error</h1>
      // <h3>${error.sqlMessage}</h3>`
    }


  }
  async create({
    view,
    request,
    response
  }) {
    // let brands = await Database.raw(`
    //   SELECT * FROM brands
    //     ORDER BY brands.title ASC

    //   `)
    let brands = ''
    return view.render('admin/orders/create', {
      brands
    })
  }
  async show({
    view,
    request,
    response,
    params
  }) {
    try {
      let order = await Database.raw(`

      SELECT orders.id,
        orders.title,
        orders.sku,
        orders.img_url,
        orders.description,
        brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        orders.material,
        orders.qty,
        orders.size,
        orders.user_id,
        orders.created_at
        FROM orders
        INNER JOIN brands
        ON orders.brand_id = brands.id
        INNER JOIN users
        ON orders.user_id = users.id
        WHERE orders.id = ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
      
      `)

      order = order[0][0] //results

      return view.render('admin/orders/show', {
        order
      })

    } catch (error) {
      console.log(error)
      return response.redirect('back')
    }
  }
  async edit({
    view,
    request,
    response,
    params
  }) {
    try {
      let order = await Database.raw(`

      SELECT orders.id,
        orders.title,
        orders.sku,
        orders.img_url,
        orders.description,
        brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        orders.material,
        orders.qty,
        orders.size,
        orders.user_id,
        orders.brand_id,
        orders.created_at
        FROM orders
        INNER JOIN brands
        ON orders.brand_id = brands.id
        INNER JOIN users
        ON orders.user_id = users.id
        WHERE orders.id = ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
      
      `)

      order = order[0][0] //results

      let brands = await Database.raw(`
      SELECT * FROM brands
        ORDER BY brands.title ASC
      
      `)
      brands = brands[0]

      return view.render('admin/orders/edit', {
        order,
        brands
      })

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }

  }
  async update({
    request,
    response,
    params
  }) {
    try {
      const id = params.id
      const post = request.post();
      await Database.raw(`

        UPDATE orders 
        SET 
        title = ${SqlString.escape(post.title)}, 
        sku = ${SqlString.escape(post.sku)}, 
        img_url = ${SqlString.escape(post.img_url)}, 
        material = ${SqlString.escape(post.material)}, 
        description = ${SqlString.escape(post.description)}, 
        brand_id = ${SqlString.escape(post.brand_id)}, 
        qty = ${SqlString.escape(post.qty)}, 
        size = ${SqlString.escape(post.size)}, 
        user_id = ${parseInt(1)}
        WHERE id =${id}
      `)
      return response.redirect(`/admin/orders/${id}`)

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }
  }
  async delete({
    request,
    response,
    params
  }) {
    try {
      const id = params.id
      await Database.raw(`

        DELETE FROM orders 
        WHERE id =${id}
      `)
      return response.redirect(`/admin/orders`)

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }
  }
}

module.exports = OrderController
