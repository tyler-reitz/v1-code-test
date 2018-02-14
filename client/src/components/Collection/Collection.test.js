import React from 'react'
import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import graphqlMock from '../../graphqlMock'
import Collection from './Collection'

describe('Collection', () => {
  it('renders', () => {
    const wrapper = mount(
      <ApolloProvider client={graphqlMock.client}>
        <Collection />
      </ApolloProvider>
    )
  })

  it('renders a list', () => {
    const wrapper = mount(
      <ApolloProvider client={graphqlMock.client}>
        <Collection />
      </ApolloProvider>
    )
    expect(wrapper.find('ul').length).toBe(1)
  })

  it('render the correct number of items', () => {
    const qry = `{
      collection {
        id
        desc
        products {
          id
          name
          price
        }
      }
    }`

    graphqlMock.expect(qry).reply({
      collection: {
        products: [
          { price: 116.05015984969214, id: 292, name: "Chartreuse" },
          { price: 226.61065350985155, id: 984, name: "Aquamarine" },
          { price: 89.074952760711312, id: 862, name: "SeaGreen" }
        ]
      }
    })

    const wrapper = mount(
      <ApolloProvider client={graphqlMock.client}>
        <Collection />
      </ApolloProvider>
    )

    expect(wrapper.find('li').length).toEqual(3)
  })
})
