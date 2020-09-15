/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customer_Customer$ref: FragmentReference;
declare export opaque type Customer_Customer$fragmentType: Customer_Customer$ref;
export type Customer_Customer = {|
  +id: ?string,
  +name: ?string,
  +age: ?number,
  +email: ?string,
  +$refType: Customer_Customer$ref,
|};
export type Customer_Customer$data = Customer_Customer;
export type Customer_Customer$key = {
  +$data?: Customer_Customer$data,
  +$fragmentRefs: Customer_Customer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Customer_Customer",
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
(node/*: any*/).hash = '2aebf5ed3a1217a4cfcaf53fce4b7414';

module.exports = node;
