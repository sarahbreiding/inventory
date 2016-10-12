var axios = require('axios')
var React = require('react')
var Items = require('../items/items')
var AddItem = require('../items/add-item')

var App = React.createClass({
  getInitialState: function () {
    return {
      items: [],
    }
  },

  componentWillMount: function () {
    axios.get('http://localhost:3000/items')
    .then(this.setItems)
  },

  setItems: function (response) {
    this.setState({
      items: response.data,
    })
  },

  render: function () {
    return (
      <div>
        <AddItem onAdd={this.itemAdded} />
        <Items
          items={this.state.items}
          onUpdate={this.itemUpdated}
          onDelete={this.itemDeleted}
        />
      </div>
    )
  },

  itemAdded: function (item) {
    axios.post('http://localhost:3000/items', {
      item: item,
    }).then(this.setItems)
  },

  itemUpdated: function (updatedItem) {
    axios.put('http://localhost:3000/items/' + updatedItem.id, {
      item: updatedItem,
    }).then(this.setItems)
  },

  itemDeleted: function (id) {
    axios.delete('http://localhost:3000/items/' + id)
    .then(this.setItems)
  },

})

module.exports = App
