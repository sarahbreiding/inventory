var React = require('react')
var Item = require('./item')

var Items = React.createClass({
  render: function () {
    return (
      <table id="content">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Notes</th>
            <th>Expiration</th>
            <th>Category</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map(function (item) {
            return (
              <Item
                key={item.id}
                item={item}
                onUpdate={this.props.onUpdate}
                onDelete={this.props.onDelete}
              />
            )
          }.bind(this))}
        </tbody>
      </table>
    )
  },
})

module.exports = Items
