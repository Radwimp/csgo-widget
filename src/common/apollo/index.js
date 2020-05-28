import ApolloClient, { InMemoryCache } from 'apollo-boost';
import getBaseUrl from '../utils/getBaseUrl';

const client = new ApolloClient({
  uri: `${getBaseUrl()}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
