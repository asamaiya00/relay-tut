import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './RelayEnvironment';
import Customers from './components/Customers';

const AppQuery = graphql`
  query AppQuery {
    customers { 
      ...Customers_Customers
    }
  }
`
class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        render={({error, props}) => {
          console.log(props)
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <Customers customers={props.customers} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}
export default App;
