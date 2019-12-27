webpackJsonp([0],{

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(77);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(78);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = __webpack_require__(153);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsaStates = __webpack_require__(155).UsaStates;
var countries = __webpack_require__(152);

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      form: {
        product: '',
        qty: 1

      }
    }, _this.inputChange = function (e) {
      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      var currentState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(currentState, {
        form: {
          $merge: _defineProperty({}, name, value)
        }
      });
      _this.setState(newState, function () {
        console.log(_this.state);
      });
    }, _this.showAllProducts = function () {

      if (_this.props.allProducts != '') {
        return _this.props.allProducts.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item.id, value: item.id },
            item.title
          );
        });
      }
    }, _this.closePopup = function () {
      _this.props.closePopup();
    }, _this.saveItemButton = function () {
      var filteredProducts = _this.props.allProducts.filter(function (product) {
        return product.id == _this.state.form.product;
      });
      var itemData = {
        productInfo: filteredProducts[0],
        qtyBuying: _this.state.form.qty
      };
      _this.props.addItemToList(itemData);
      _this.props.closePopup();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'popup ' + (this.props.showPopup ? 'active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'container-box' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12' },
              _react2.default.createElement(
                'h2',
                null,
                'Add Item to order'
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '' },
                  'Product'
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'custom-select', name: 'product', value: this.state.form.product, onChange: this.inputChange },
                  _react2.default.createElement(
                    'option',
                    { value: 'none' },
                    'Select a sneaker'
                  ),
                  this.showAllProducts()
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '' },
                  'Quantity'
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'custom-select', name: 'qty', value: this.state.form.qty, onChange: this.inputChange },
                  _react2.default.createElement(
                    'option',
                    { value: '1' },
                    '1'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2' },
                    '2'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3' },
                    '3'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '4' },
                    '4'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    '5'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '6' },
                    '6'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '7' },
                    '7'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '8' },
                    '8'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '9' },
                    '9'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'add-btn btn btn-primary mb-3', onClick: this.saveItemButton },
                'save item'
              ),
              _react2.default.createElement(
                'div',
                { className: 'add-btn btn btn-danger mb-3', onClick: this.closePopup },
                'cancel'
              )
            )
          )
        )
      );
    }
  }]);

  return Popup;
}(_react.Component);

exports.default = Popup;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(77);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(78);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = __webpack_require__(153);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _popup = __webpack_require__(241);

var _popup2 = _interopRequireDefault(_popup);

var _axios = __webpack_require__(240);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsaStates = __webpack_require__(155).UsaStates;
var countries = __webpack_require__(152);

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      },
      allProducts: '',
      allItems: [],
      showPopup: false
    }, _this.inputChange = function (e) {
      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      var currentState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(currentState, {
        form: {
          $merge: _defineProperty({}, name, value)
        }
      });
      _this.setState(newState, function () {
        console.log(_this.state);
      });
    }, _this.showStates = function () {
      var usStates = new UsaStates();
      return usStates.states.map(function (item) {
        return _react2.default.createElement(
          'option',
          { key: item.abbreviation, value: item.abbreviation },
          item.name
        );
      });
    }, _this.showCountries = function () {
      var allCountries = countries.getData();
      return allCountries.map(function (item) {
        return _react2.default.createElement(
          'option',
          { key: item.code, value: item.code },
          item.name
        );
      });
    }, _this.togglePopup = function () {
      _this.setState({
        showPopup: !_this.state.showPopup
      });
    }, _this.getAllProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var allProducts;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('/api/admin/products');

            case 3:
              allProducts = _context.sent;

              allProducts = allProducts.data;
              _this.setState({
                allProducts: allProducts
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 8]]);
    })), _this.addItemToList = function (item) {
      var allItems = _this.state.allItems;
      var oldState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(oldState, {
        allItems: { $push: [item] }
      });
      _this.setState(newState, function () {
        console.log('This is the new state ' + _this.state);
      });
    }, _this.removeItem = function (index) {
      var oldState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(oldState, {
        allItems: {
          $splice: [[index, 1]]
        }
      });
      _this.setState(newState);
    }, _this.showAllItems = function () {

      return _this.state.allItems.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: item.productInfo.id, className: 'col-md-3' },
          _react2.default.createElement(
            'div',
            { className: 'item-box' },
            _react2.default.createElement(
              'div',
              { className: 'item-img', style: { background: 'url("' + item.productInfo.img_url + '")' } },
              _react2.default.createElement(
                'div',
                { className: 'item-delete', onClick: _this.removeItem.bind(null, index) },
                _react2.default.createElement('i', { className: 'ti-close' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              item.productInfo.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'quantity' },
              _react2.default.createElement(
                'label',
                { className: 'col-form-label' },
                'Quantity'
              ),
              _react2.default.createElement(
                'h4',
                null,
                item.qtyBuying
              )
            )
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAllProducts();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: '/admin/products', method: 'post' },
        _react2.default.createElement(
          'div',
          { className: 'row form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'First Name'
            ),
            _react2.default.createElement('input', { name: 'f_name', className: 'form-control', type: 'text', value: this.state.form.f_name, id: 'example-text-input', onChange: this.inputChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'Last Name'
            ),
            _react2.default.createElement('input', { name: 'l_name', className: 'form-control', type: 'text', value: this.state.form.l_name, onChange: this.inputChange, id: 'example-text-input' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'Address'
            ),
            _react2.default.createElement('input', { name: 'address', className: 'form-control', type: 'text', value: this.state.form.address, onChange: this.inputChange, id: 'example-text-input' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'Address 2'
            ),
            _react2.default.createElement('input', { name: 'address_2', className: 'form-control', type: 'text', value: this.state.form.address_2, onChange: this.inputChange, id: 'example-text-input' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-3' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'City'
            ),
            _react2.default.createElement('input', { name: 'city', className: 'form-control', type: 'text', value: this.state.form.city, onChange: this.inputChange, id: 'example-text-input' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-3' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'example-text-input', className: 'col-form-label' },
              'State'
            ),
            _react2.default.createElement(
              'select',
              { className: 'custom-select', name: 'state', value: this.state.form.state, onChange: this.inputChange },
              this.showStates()
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { className: 'col-form-label' },
              'Country'
            ),
            _react2.default.createElement(
              'select',
              { className: 'custom-select', name: 'country', value: this.state.form.country, onChange: this.inputChange },
              this.showCountries()
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { className: 'col-form-label' },
              'Postal Code'
            ),
            _react2.default.createElement('input', { name: 'postal_code', className: 'form-control', type: 'text', value: this.state.form.postal_code, onChange: this.inputChange, id: 'example-text-input' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 col-md-6' },
            _react2.default.createElement(
              'label',
              { className: 'col-form-label' },
              'Payment Type'
            ),
            _react2.default.createElement(
              'select',
              { className: 'custom-select', name: 'payment_type', value: this.state.form.payment_type, onChange: this.inputChange },
              _react2.default.createElement(
                'option',
                { value: '' },
                'Paypal'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row order_items' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              'Order Items'
            )
          ),
          this.showAllItems(),
          _react2.default.createElement(
            'div',
            { className: 'col-md-3' },
            _react2.default.createElement(
              'div',
              { className: 'item-box' },
              _react2.default.createElement(
                'div',
                { className: 'add_item_button', onClick: this.togglePopup },
                _react2.default.createElement(
                  'span',
                  null,
                  '+'
                ),
                'Add New Item'
              )
            )
          ),
          _react2.default.createElement(_popup2.default, { showPopup: this.state.showPopup,
            closePopup: this.togglePopup,
            allProducts: this.state.allProducts,
            addItemToList: this.addItemToList
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-flat btn-outline-primary mb-3' },
            'Submit'
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var ordersForm = document.getElementById('ordersForm');

_reactDom2.default.render(_react2.default.createElement(Layout, null), ordersForm);

/***/ })

},[262]);