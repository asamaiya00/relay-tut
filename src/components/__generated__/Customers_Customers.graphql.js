/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Customer_customer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customers_Customers$ref: FragmentReference;
declare export opaque type Customers_Customers$fragmentType: Customers_Customers$ref;
export type Customers_Customers = {|
  +$fragmentRefs: Customer_customer$ref,
  +$refType: Customers_Customers$ref,
|};
export type Customers_Customers$data = Customers_Customers;
export type Customers_Customers$key = {
  +$data?: Customers_Customers$data,
  +$fragmentRefs: Customers_Customers$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Customers_Customers",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Customer_customer"
    }
  ],
  "type": "Customer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '55da956aa9baa4aea8534cc9bb2ffc68';

module.exports = node;
