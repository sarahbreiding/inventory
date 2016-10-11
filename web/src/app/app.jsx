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
    .then(function (response) {
      this.setState({
        items: response.data,
      })
    }.bind(this))
  },

  render: function () {
    return (
      <div>
        <AddItem onAdd={this.itemAdded} />
        <Items
          items={this.state.items}
          onUpdate={this.itemUpdated}
        />
      </div>
    )
  },

  itemAdded: function (item) {
    this.setState({
      items: this.state.items.concat(item),
    })
  },

  getItemById: function (id) {
    var itemsWithId = this.state.items.filter(function (item) {
      return item.id === id
    })
    return itemsWithId[0]
  },

  itemUpdated: function (updatedItem) {
    var item = this.getItemById(updatedItem.id)
    Object.keys(updatedItem).forEach(function (prop) {
      item[prop] = updatedItem[prop]
    })
    this.setState({
      items: this.state.items,
    })
  },
})

module.exports = App
