'use strict'

class ProductController {

  index({
    view
  }) {
    return view.render('admin/products/all')
  }
  store() {

  }
  create({
    view
  }) {
    return view.render('admin/products/create')
  }
  show() {

  }
  edit() {

  }
  update() {

  }
  delete() {

  }
}

module.exports = ProductController
