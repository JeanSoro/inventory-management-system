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

  closePopup = () => {
    this.props.closePopup()
  }

  showAllProducts = () => {

    if (this.props.allProducts != '') {
      return this.props.allProducts.map((item) =>
        (<option key={item.id} value={item.id}>{item.title}</option>))
    }

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
                  <option value="0">Nike</option>
                  <option value="1">Adidas</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Quantity</label>
                <select className="custom-select" name="qty" value={this.state.form.qty} onChange={this.inputChange}>
                  {this.showAllProducts()}
                </select>
              </div>
              <div className="add-btn btn btn-primary mb-3">
                save item
                  </div>
              <div className="add-btn btn btn-primary mb-3" onClick={this.closePopup}>
                cancel
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

