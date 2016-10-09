var React = require('react')


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
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.notes}</td>
                <td>{item.expiration_date}</td>
                <td>{item.category ? item.category.name : 'No Category'}</td>
                <td>{item.location ? item.location.name : 'No Location'}</td>
                <td className="item-actions">Edit/Delete</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  },
})

module.exports = Items
