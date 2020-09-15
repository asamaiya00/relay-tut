import React from 'react';
import Customer from './Customer';
import { createFragmentContainer, graphql } from 'react-relay';

// const mockPostData = [
//   {
//     node: {
//       id: "1",
//       description: "Howdy Partner",
//       imageUrl: "http://www.cutestpaw.com/wp-content/uploads/2015/09/s-Howdy-partner.jpeg"
//     }
//   },
//   {
//     node: {
//       id: "2",
//       description: "Ice Cream!",
//       imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/b9/ba/b9/b9bab9dcacb9efde92e015af07834473.jpg"
//     }
//   }
// ]

class Customers extends React.Component {
  render() {
      console.log(this.props)
    return (
      <div className="w-100 flex justify-center">
        <div className="w-100" style={{ maxWidth: 400 }}>
            <h1>Customers</h1> 
        {/*mockPostData.map(({node}) =>
            <Post key={node.id} post={node} />
    )*/}
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  Customers,
  graphql`
    fragment Customers_viewer on Customer {
      ...Customer_cus
    }
  `
);
