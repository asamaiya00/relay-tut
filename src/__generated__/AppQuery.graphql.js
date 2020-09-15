/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Customers_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +customers: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Customers_viewer$ref
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
    ...Customers_viewer
  }
}

fragment Customer_cus on Customer {
  id
  name
  age
  email
}

fragment Customers_viewer on Customer {
  ...Customer_cus
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
            "name": "Customers_viewer"
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
    "cacheID": "8764b4883e2f2e0a08587687c27d0a18",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  customers {\n    ...Customers_viewer\n  }\n}\n\nfragment Customer_cus on Customer {\n  id\n  name\n  age\n  email\n}\n\nfragment Customers_viewer on Customer {\n  ...Customer_cus\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '3cc57d54cac12cf0d6494b8a0a184004';

module.exports = node;
