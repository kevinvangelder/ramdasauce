import R from 'ramda'

/**
 * Finds the index of an object in an array by the given property and value.
 *
 * @since v1.0.1
 * @param {prop} (String) The prop to search by.
 * @param {value} (String) The string to search for.
 * @param {source} (Array) The array to search in.
 * @return {Integer} The index of the object that matches the search.
 * @example
 * RS.endsWith('o', 'hello') //=> true
 */
var findIndexByProp = R.curry(
  function (prop, value, source) => R.findIndex(R.propEq(prop, value))(source)
)

export default findIndexByProp