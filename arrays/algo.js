
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

/**
 * 
 * @param {*} data 
 * @param {*} key 
 * @param {*} attribute 
 * Search the key based on the attribute passed.
 */
function linear_search (data, key, attribute) {
    for (let i = 0; i < data.length; i++) {
       if(equalsTo (data[i], key, attribute) == 0) {
           console.log(data[i])
           return data[i];
       }
    }
    return null;
}

/**
 * 
 * @param {*} first 
 * @param {*} second 
 * @param {*} first_index 
 * @param {*} second_index 
 * Swapping between two arrays.
 */
function swap_array (first, second, first_index, second_index) {
    let temp = first[first_index];
    first[first_index] = second[second_index];
    second[second_index] = temp;
}
/**
 * 
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 * Swapping the elements of the array.
 */
function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
/**
 * 
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 * @param {*} attribute 
 * To compare between the objects based on their attributes.
 */
function compareTo (arr, i, j, attribute) {
    if(!attribute)      return;
    switch (attribute) {
        case 'Roll No': {
            if(arr[i].rollNo > arr[j].rollNo)   return 1000;
            else if(arr[i].rollNo < arr[j].rollNo)      return -1000;
            else    return 0;
        }
        case 'Name': {
           return arr[i].name.localeCompare(arr[j].name)
        }
        case 'Subject': {
           return arr[i].subject.localeCompare(arr[j].subject)
        }
        case 'Marks': {
            if(arr[i].marks > arr[j].marks)   return 1000;
            else if(arr[i].marks < arr[j].marks)      return -1000;
            else    return 0;
        }
        default: {
            if(arr[i] > arr[j])   return 1000;
            else if(arr[i] < arr[j])      return -1000;
            else    return 0;
        }
    }
}
/**
 * 
 * @param {*} info 
 * @param {*} key 
 * @param {*} attribute 
 * info is an object, not an array.
 */
function equalsTo (info, key, attribute) {
    if(!attribute)      return;
    switch (attribute) {
        case 'Roll No': {
            if(info.rollNo > key)      return 1000;
            else if(info.rollNo < key)      return -1000;
            else return 0;
        }
        case 'Name': {           
            return info.name.localeCompare(key)
        }
        case 'Subject': {
           return (info.subject.localeCompare(key)) 
           
        }
        case 'Marks': {
           if(info.marks > key)     return 1000;
           else if(info.marks < key)    return -1000;
           else     return 0;
        }
        default: {
           if(info > key)       return 1000;
           else if(info < key)  return -1000
           else return 0;
        }
    }
}