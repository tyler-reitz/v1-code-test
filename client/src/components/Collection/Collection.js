import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Collection extends Component {
  render() {
    const { data: { collection: { products = []} = {}} = {}} = this.props

    return (
      <div>
        <ul>
          {products.map(p => <li key={p.id}>{p.name} – ${p.price.toFixed(2)}</li>)}
        </ul>
      </div>
    )
  }
}

const qry = gql`
{
  collection {
    id
    desc
    products {
      id
      name
      price
    }
  }
}
`

export default graphql(qry)(Collection)

