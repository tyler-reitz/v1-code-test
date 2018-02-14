import { MockList } from 'graphql-tools'
import casual from 'casual'

const mocks = {
  String: () => 'It works!',
  Product: () => ({
    id: () => casual.integer(0, 1000),
    name: () => casual.color_name,
    price: () => casual.double(0, 250)
  }),
  Collection: () => ({
    id: () => casual.integer(0,1000),
    desc: () => 'Pantone colors 2018',
    products: () => new MockList([10,20]),
    discount: () => casual.double(0, 100),
  })
};

export default mocks;
