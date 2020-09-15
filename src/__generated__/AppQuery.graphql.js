/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Customers_Customers$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +customers: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Customers_Customers$ref
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  customers {
    ...Customers_Customers
  }
}

fragment Customer_Customer on Customer {
  id
  name
  age
  email
}

fragment Customers_Customers on Customer {
  ...Customer_Customer
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "customers",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Customers_Customers"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "customers",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9fd60a2e44f37023724503ef77393427",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  customers {\n    ...Customers_Customers\n  }\n}\n\nfragment Customer_Customer on Customer {\n  id\n  name\n  age\n  email\n}\n\nfragment Customers_Customers on Customer {\n  ...Customer_Customer\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd605afb156b888d2429c0c99d1003782';

module.exports = node;
