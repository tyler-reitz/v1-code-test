import GraphQLMock from 'graphql-mock'
import { typeDefs } from '../../data/schema'
import mocks from '../../data/mocks'

export default new GraphQLMock(typeDefs, mocks)

