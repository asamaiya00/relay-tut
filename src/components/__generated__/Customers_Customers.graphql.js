/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Customer_Customer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customers_Customers$ref: FragmentReference;
declare export opaque type Customers_Customers$fragmentType: Customers_Customers$ref;
export type Customers_Customers = {|
  +$fragmentRefs: Customer_Customer$ref,
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
      "name": "Customer_Customer"
    }
  ],
  "type": "Customer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4ab458b48dc0ec2126d653bfdc91bc46';

module.exports = node;
