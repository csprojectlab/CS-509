function linear_search (data, key, attribute) {
    for (let i = 0; i < data.length; i++) {
       if(equalsTo (data[i], key, attribute)) {
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
 */
function equalsTo (info, key, attribute) {
    if(!attribute)      return;
    switch (attribute) {
        case 'Roll No': {
            return (info.rollNo == key)             
        }
        case 'Name': {
           return info.name.localeCompare(info.name) == 0
        }
        case 'Subject': {
           return (info.subject.localeCompare(info.subject) == 0) 
           
        }
        case 'Marks': {
            return info.marks == key
        }
        default: {
            return (info == key)
        }
    }
}