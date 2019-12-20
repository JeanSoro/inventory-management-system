import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'

let UsaStates = require('usa-states').UsaStates;
let countries = require('country-list');



class Layout extends Component {
  constructor() {
    super()
    this.state = {
      form: {
        f_name: '',
        l_name: '',
        address: '',
        address_2: '',
        city: '',
        state: 'CA',
        country: 'US',
        postal_code: '',
        payment_type: 'paypal'
      }
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

  showStates = () => {
    let usStates = new UsaStates();
    return usStates.states.map((item) => (<option key={item.abbreviation} value={item.abbreviation}>{item.name}</option>

    ))
  }

  showCountries = () => {
    let allCountries = countries.getData();
    return allCountries.map((item) => (<option key={item.code} value={item.code}>{item.name}</option>

    ))
  }

  render() {
    return (

      <form action="/admin/products" method="post">
        <div className="row form-group">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">First Name</label>
            <input name="f_name" className="form-control" type="text" value={this.state.form.f_name} id="example-text-input" onChange={this.inputChange} />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">Last Name</label>
            <input name="l_name" className="form-control" type="text" value={this.state.form.l_name} onChange={this.inputChange} id="example-text-input" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">Address</label>
            <input name="address" className="form-control" type="text" value={this.state.form.address} onChange={this.inputChange} id="example-text-input" />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">Address 2</label>
            <input name="address_2" className="form-control" type="text" value={this.state.form.address_2} onChange={this.inputChange} id="example-text-input" />
          </div>

        </div>
        <div className="form-group row">
          <div className="col-sm-12 col-md-3">
            <label htmlFor="example-text-input" className="col-form-label">City</label>
            <input name="city" className="form-control" type="text" value={this.state.form.city} onChange={this.inputChange} id="example-text-input" />
          </div>
          <div className="col-sm-12 col-md-3">
            <label htmlFor="example-text-input" className="col-form-label">State</label>
            <select className="custom-select" name="state" value={this.state.form.state} onChange={this.inputChange}>
              {this.showStates()}
            </select>
          </div>

          <div className="col-sm-12 col-md-6">
            <label className="col-form-label">Country</label>
            <select className="custom-select" name="country" value={this.state.form.country} onChange={this.inputChange}>
              {this.showCountries()}
            </select>
          </div>

        </div>
        <div className="form-group row">
          <div className="col-sm-12 col-md-6">
            <label className="col-form-label">Postal Code</label>
            <input name="postal_code" className="form-control" type="text" value={this.state.form.postal_code} onChange={this.inputChange} id="example-text-input" />
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="col-form-label">Payment Type</label>
            <select className="custom-select" name="payment_type" value={this.state.form.payment_type} onChange={this.inputChange}>
              <option value="">Paypal</option>
            </select>
          </div>
        </div>
        <div className="row order_items">
          <div className="col-md-12">
            <h3>Order Items</h3>
          </div>
          <div className="col-md-3">
            <div className="item-box">

              <div className="item-img" style={{ background: "url('https://ilbeldes-cdn.sirv.com/prestashop/img/p/1/7/3/7/edition-1-vintage-femme.jpg')" }}>
                <div className="item-delete">
                  <i className="ti-close"></i>
                </div>
              </div>
              <div className="title">
                sneaker title
                  </div>
              <div className="quantity">
                <label className="col-form-label">Quantity</label>
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item-box">
              <div className="add_item_button">
                <span>+</span>
                Add New Item
                </div>
            </div>
          </div>
          <div className="popup">
            <div className="container-box">
              <div className="row">
                <div className="col-md-12">
                  <h2>Add Item to order</h2>
                  <div className="form-group">
                    <label htmlFor="">Product</label>
                    <select className="custom-select" name="product">
                      <option value="0">Title / Quantity</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <select className="custom-select" name="qty">
                      <option value="0">1</option>
                    </select>
                  </div>
                  <div className="add-btn btn btn-primary mb-3">
                    save item
                  </div>
                  <div className="add-btn btn btn-primary mb-3">
                    cancel;
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-flat btn-outline-primary mb-3">Submit</button>
        </div>
      </form>
    )
  }
}

const ordersForm = document.getElementById('ordersForm')

ReactDOM.render(<Layout />, ordersForm)