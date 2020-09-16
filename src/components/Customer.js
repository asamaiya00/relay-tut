import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Customer extends React.Component {
  render() { 
    console.log(JSON.stringify(this.props.customer));
    return (
      <div className="pa3 bg-black-05 ma3">
        <h4>Customer</h4>
        {/* <div  
          className="w-100"
          style={{
            backgroundImage: `url(${this.props.Customer.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />*/ }
        <div className="pt3">
          <h1>{this.props.customer.name}</h1>
          <span className="red f6 pointer dim" onClick={this._handleDelete}>
            Delete
          </span>
        </div>
      </div>
    );
  }
  _handleDelete = () => {};
}

export default createFragmentContainer(Customer, {
  customer: graphql`
    fragment Customer_customer on Customer {
      id
      name
      imageUrl
      age
      email
    }
  `,
});
