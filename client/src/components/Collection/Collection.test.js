import React from 'react'
import { shallow } from 'enzyme'
import Collection from './Collection'

describe('Collection', () => {
  it('renders', () => {
    const wrapper = shallow(<Collection />)
  })

  it('renders a list', () => {
    const wrapper = shallow(<Collection />)
    expect(wrapper.find('ul').length).toBe(1)
  })

  it('render the correct number of items', () => {
    const props = { data : { collection: { products: [
      { "price": 128.4153428277932, "id": 297, "name": "MintCream" },
      { "price": 193.19499051198363, "id": 414, "name": "PeachPuff" },
      { "price": 96.49997774977237, "id": 247, "name": "SkyBlue" },
    ]}}}

    const wrapper = shallow(<Collection {...props} />)
    expect(wrapper.find('li').length).toEqual(3)
  })
})
