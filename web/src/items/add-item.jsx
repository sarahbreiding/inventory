var React = require('react')
var axios = require('axios')
var AddItem = React.createClass({

  render: function () {
    return (
      <form onSubmit={this.addItem}>
        <div className='mobile-add-new'>
          <label>Name</label>
          <input ref='name'/>
        </div>
        <div className='mobile-add-new'>
          <label>Quantity</label>
          <input ref='quantity' type='number'/>
        </div>
        <div className='mobile-add-new'>
          <label>Notes</label>
          <input ref='notes' />
        </div>
        <div className='mobile-add-new'>
          <label>Expiration Date</label>
          <input ref='expirationDate' type='date'/>
        </div>
        <button>Submit</button>
      </form>
    )
  },

  addItem: function (e) {
    e.preventDefault()
    var item = {
      name: this.refs.name.value,
      quantity: this.refs.quantity.value,
      notes: this.refs.notes.value,
      category_id: null,
      location_id: null,
      expiration_date: this.refs.expirationDate.value,
    }

    this.props.onAdd(item)

    this.refs.name.value = ''
    this.refs.quantity.value = ''
    this.refs.notes.value = ''
    this.refs.expirationDate.value = ''
  },
})

module.exports = AddItem
