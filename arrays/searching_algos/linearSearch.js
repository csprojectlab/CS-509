/**
 *
 * @param {*} data
 * @param {*} key
 * @param {*} attribute
 * Search the key based on the attribute passed.
 */
function linear_search(data, key, attribute) {
  for (let i = 0; i < data.length; i++) {
    if (equalsTo(data[i], key, attribute) == 0) {
      return data[i];
    }
  }
  return null;
}
