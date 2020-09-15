import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Customer extends React.Component {
  render() {
    console.log(this.props);
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
        />*/}
        <div className="pt3">
          {/*this.props.Customer.description*/}&nbsp;
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
  Customer: graphql`
    fragment Customer_Customer on Customer {
      id
      name
      age
      email
    }
  `,
});
