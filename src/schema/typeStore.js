/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */

const types = {
  // TODO
};

export function register(type, value) {
  types[type] = value;
}

export function detectType(obj) {
  // TODO
}
