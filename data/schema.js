import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Collection {
  id: Int
  desc: String
  products: [Product]
  discount: Float
}
type Product {
  id: Int
  name: String
  price: Float
  collection: Collection
}
type Query {
  collection(id: Int): Collection
  product(name: String): Product
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
