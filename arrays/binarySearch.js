/**
 * 
 * @param {*} data 
 * @param {*} key 
 * @param {*} attribute 
 */
function binary_search (data, key, attribute) {    
    return binary_search_util (data, key, attribute, 0, data.length - 1)
}
/**
 * 
 * @param {*} data 
 * @param {*} key 
 * @param {*} attribute 
 * @param {*} low 
 * @param {*} high 
 */
function binary_search_util (data, key, attribute, low, high) {
    if(low > high)      return -1;
    let mid = Math.floor ((low + high) / 2)    
    if(equalsTo (data[mid], key, attribute) == 0)
        return mid;
    else if(equalsTo (data[mid], key, attribute) > 0)    // Mid is greater than the key
        return binary_search_util (data, key, attribute, low, mid - 1);
    return binary_search_util (data, key, attribute, mid + 1, high);    
}