import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'

let UsaStates = require('usa-states').UsaStates;
let countries = require('country-list');


export default class Popup extends Component {

  state = {
    form: {
      product: '',
      qty: 1

    }
  }


  inputChange = (e) => {
    let name = e.target.name;
    let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
    let currentState = this.state;
    let newState = update(currentState, {
      form: {
        $merge: {
          [name]: value
        }
      }
    })
    this.setState(newState, () => {
      console.log(this.state)
    })
  }


  showAllProducts = () => {

    if (this.props.allProducts != '') {
      return this.props.allProducts.map((item) =>
        (<option key={item.id} value={item.id}>{item.title}</option>))
    }

  }

  closePopup = () => {
    this.props.closePopup()
  }

  saveItemButton = () => {
    let filteredProducts = this.props.allProducts.filter((product) => product.id == this.state.form.product)
    let itemData = {
      productInfo: filteredProducts[0],
      qtyBuying: this.state.form.qty
    }
    this.props.addItemToList(itemData)
    this.props.closePopup()
  }



  render() {
    return (

      <div className={`popup ${(this.props.showPopup) ? 'active' : ''}`} >
        <div className="container-box">
          <div className="row">
            <div className="col-md-12" >
              <h2>Add Item to order</h2>
              <div className="form-group">
                <label htmlFor="">Product</label>
                <select className="custom-select" name="product" value={this.state.form.product} onChange={this.inputChange}>
                  <option value="none">
                    Select a sneaker
                </option>
                  {this.showAllProducts()}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Quantity</label>
                <select className="custom-select" name="qty" value={this.state.form.qty} onChange={this.inputChange}>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div className="add-btn btn btn-primary mb-3" onClick={this.saveItemButton}>
                save item
                  </div>
              <div className="add-btn btn btn-danger mb-3" onClick={this.closePopup}>
                cancel
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

