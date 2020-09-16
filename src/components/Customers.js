import React from 'react';
import Customer from './Customer';
import { createFragmentContainer, graphql } from 'react-relay';

// const mockPostData = [
//   {
//     customer: {
//       id: "1",
//       description: "Howdy Partner",
//       imageUrl: "http://www.cutestpaw.com/wp-content/uploads/2015/09/s-Howdy-partner.jpeg"
//     }
//   },
// ]

class Customers extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="w-100 flex justify-center">
        <div className="w-100" style={{ maxWidth: 400 }}>
          <h1>Customers</h1>
          {this.props.customers.map(( customer ) => (
            <Customer key={customer.__id} customer={customer} />
          ))}
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(Customers, {
  Customers: graphql` 
    fragment Customers_Customers on Customer {
      ...Customer_customer
    }
  `,
});
