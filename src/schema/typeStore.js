/* @flow */
import type { TypeKind } from "graphql";

/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */

const types = {
  // TODO
};

type Stores = $Keys<typeof types>;

export function register(type: Stores, value: TypeKind) {
  types[type] = value;
}

type Obj = any; // TODO union of all possible input types

export function detectType(obj: Obj): ?TypeKind {
  // TODO
}
