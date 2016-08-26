/**
 * Bind instance methods
 * @function abind
 * @param {Object} instance - Instance to bind
 * @param {Object} [options={}] - Optional settings
 * @param {Object} [options.proto=getPrototypeOf(instance)] - Prototype to bind
 * @param {string[]} [options.excludes] - Names to exclude
 * @returns {Object} instance - Bounded instance
 */
'use strict'

/** @lends abind */
function abind (instance, options = {}) {
  let {
    proto = Object.getPrototypeOf(instance),
    excludes = []
  } = options
  let propertyNames = Object.getOwnPropertyNames(proto)
    .filter((name) => typeof proto[ name ] === 'function')
    .filter((name) => !~excludes.indexOf(name))
  for (let name of propertyNames) {
    instance[ name ] = proto[ name ].bind(instance)
  }
  return instance
}

module.exports = abind
