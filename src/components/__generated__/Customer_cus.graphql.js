/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customer_cus$ref: FragmentReference;
declare export opaque type Customer_cus$fragmentType: Customer_cus$ref;
export type Customer_cus = {|
  +id: ?string,
  +name: ?string,
  +age: ?number,
  +email: ?string,
  +$refType: Customer_cus$ref,
|};
export type Customer_cus$data = Customer_cus;
export type Customer_cus$key = {
  +$data?: Customer_cus$data,
  +$fragmentRefs: Customer_cus$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Customer_cus",
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
(node/*: any*/).hash = '75be376f617e50309d51fed9b3be1506';

module.exports = node;
