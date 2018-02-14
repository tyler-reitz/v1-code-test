import React, { Component } from 'react'

class Collection extends Component {
  render() {
    const { data: { collection: { products = []} = {}} = {}} = this.props

    return (
      <div>
        <ul>
          {products.map(p => <li key={p.id}></li>)}
        </ul>
      </div>
    )
  }
}

export default Collection

