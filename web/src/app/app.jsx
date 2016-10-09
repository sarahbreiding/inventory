var React = require('react')
var axios = require('axios')

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
          {this.state.items.map(function (item) {
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

module.exports = App
