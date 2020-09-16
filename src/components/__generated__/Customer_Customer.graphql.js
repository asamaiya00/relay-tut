/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customer_customer$ref: FragmentReference;
declare export opaque type Customer_customer$fragmentType: Customer_customer$ref;
export type Customer_customer = {|
  +id: ?string,
  +name: ?string,
  +imageUrl: ?string,
  +age: ?number,
  +email: ?string,
  +$refType: Customer_customer$ref,
|};
export type Customer_customer$data = Customer_customer;
export type Customer_customer$key = {
  +$data?: Customer_customer$data,
  +$fragmentRefs: Customer_customer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Customer_customer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "age",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "Customer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'fb3e77ee65e0ec33528e2d899d472e4f';

module.exports = node;
