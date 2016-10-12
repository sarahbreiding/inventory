var React = require('react')

var Item = React.createClass({
  getInitialState: function () {
    return {
      isEditing: false,
    }
  },

  render: function () {
    var item = this.props.item

    return (
      <tr>
        <td>{this.state.isEditing ? <input defaultValue={item.name} ref='name' /> : item.name}</td>
        <td>{this.state.isEditing ? <input defaultValue={item.quantity} ref='quantity' type='number' /> : item.quantity}</td>
        <td>{this.state.isEditing ? <input defaultValue={item.notes} ref='notes' /> : item.notes}</td>
        <td>{this.state.isEditing ? <input defaultValue={item.expiration_date} ref='expirationDate' type='date' /> : item.expiration_date}</td>
        <td>{item.category ? item.category.name : 'No Category'}</td>
        <td>{item.location ? item.location.name : 'No Location'}</td>
        <td className="item-actions">
          <button onClick={this.toggleEdit}>{this.state.isEditing ? 'Save' : 'Edit'}</button>
          <button onClick={this.deleteItem}>Delete</button>
        </td>
      </tr>
    )
  },

  save: function () {
    var updatedItem = {
      id: this.props.item.id,
      name: this.refs.name.value,
      quantity: this.refs.quantity.value,
      notes: this.refs.notes.value,
      category_id: null,
      location_id: null,
      expiration_date: this.refs.expirationDate.value,
    }

    this.props.onUpdate(updatedItem)
  },

  deleteItem: function () {
    if (confirm('Are you sure you want to delete this item?')) {
      this.props.onDelete(this.props.item.id)
    }
  },

  toggleEdit: function () {
    if (this.state.isEditing) {
      this.save()
    }
    this.setState({
      isEditing: !this.state.isEditing,
    })
  },
})

module.exports = Item
