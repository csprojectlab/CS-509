
/**
 * 
 * @param {*} first 
 * @param {*} second 
 * @param {*} first_index 
 * @param {*} second_index 
 * Swapping between two arrays.
 */
function swap_array (first, second, first_index, second_index) {
    swap_count++;
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
    if(i == j)  return;
    swap_count++;
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
function compareTo (first, second, attribwute) {
    if(!attribute)      return;
    switch (attribute) {
        case 'Roll No': {           
            if(first.rollNo > second.rollNo)   return 1000;
            else if(first.rollNo < second.rollNo)      return -1000;
            else    return 0;
        }
        case 'Name': {
           return first.name.localeCompare(second.name)
        }
        case 'Subject': {
           return first.subject.localeCompare(second.subject)
        }
        case 'Marks': {
            if(first.marks > second.marks)   return 1000;
            else if(first.marks < second.marks)      return -1000;
            else    return 0;
        }
        default: {
            if(first > second)   return 1000;
            else if(first < second)      return -1000;
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
            return (info.name.localeCompare(key))
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