'use strict'

const Database = use('Database')
const SqlString = require('sqlstring')

class BrandController {
  async index({
    view,
    request,
    response
  }) {
    try {
      let allBrands = await Database.raw(`

      SELECT brands.id, brands.title, brands.img_url, brands.user_id,
      concat(users.f_name, ' ', users.l_name) as user,
      brands.created_at, brands.updated_at FROM brands
      INNER JOIN users
      ON brands.user_id = users.id
      ORDER BY created_at ASC
      
      `)
      allBrands = allBrands[0] //results

      return view.render('admin/brands/all', {
        allBrands
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

      INSERT INTO brands (title, img_url, description, user_id)
      VALUES(${SqlString.escape(post.title)}, ${SqlString.escape(post.img_url)}, ${SqlString.escape(post.description)}, ${parseInt(1)})
      `)
      return response.redirect('/admin/brands')

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }


  }
  create({
    view,
    request,
    response
  }) {
    return view.render('admin/brands/create')
  }
  async show({
    view,
    request,
    response,
    params
  }) {
    try {
      let brand = await Database.raw(`

      SELECT brands.id,
        brands.title,
        brands.sku,
        brands.img_url,
        brands.description,
        brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        brands.material,
        brands.qty,
        brands.size,
        brands.user_id,
        brands.created_at
        FROM brands
        INNER JOIN brands
        ON products.brand_id = brands.id
        INNER JOIN users
        ON products.user_id = users.id
        WHERE products.id = ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
      
      `)

      product = product[0][0] //results

      return view.render('admin/brands/show', {
        brand
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
      let brand = await Database.raw(`

      SELECT brands.id,
        brands.title,
        brands.img_url,
        brands.description,
        concat(users.f_name, ' ', users.l_name) as user,
        brands.user_id,
        brands.created_at,
        brands.updated_at
        FROM brands
        INNER JOIN users
        ON brands.user_id = users.id
        WHERE brands.id = ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
      
      `)

      brand = brand[0][0] //results

      return view.render('admin/brands/edit', {
        brand
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

        UPDATE brands 
        SET 
        title = ${SqlString.escape(post.title)}, 
        img_url = ${SqlString.escape(post.img_url)}, 
        description = ${SqlString.escape(post.description)}
        WHERE id =${id}
      `)
      return response.redirect(`/admin/brands/${id}`)

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

        DELETE FROM brands 
        WHERE id =${id}
      `)
      return response.redirect(`/admin/brands`)

    } catch (error) {
      console.log(error)
      return response.redirect('back')

    }
  }
}

module.exports = BrandController
