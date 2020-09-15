/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Customer_cus$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Customers_viewer$ref: FragmentReference;
declare export opaque type Customers_viewer$fragmentType: Customers_viewer$ref;
export type Customers_viewer = {|
  +$fragmentRefs: Customer_cus$ref,
  +$refType: Customers_viewer$ref,
|};
export type Customers_viewer$data = Customers_viewer;
export type Customers_viewer$key = {
  +$data?: Customers_viewer$data,
  +$fragmentRefs: Customers_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Customers_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Customer_cus"
    }
  ],
  "type": "Customer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0f2844309c0be200407f98c36a8009f4';

module.exports = node;
