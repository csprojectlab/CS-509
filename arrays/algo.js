let swap_count = 0;
let start_time = 0;
let end_time = 0;
/**
 * 
 * @param {*} data 
 * @param {*} attribute 
 */
function quick_sort (data, attribute) {
    start_time = new Date ().getTime();
    quick_sort_util (data, attribute, 0, data.length - 1)
    end_time = new Date ().getTime();
    let obj =  {data: data, execution_time: end_time - start_time, swap_count: swap_count}
    swap_count = 0;
    return obj;
}

function quick_sort_util (data, attribute, low, high) {
    if(low < high) {
        let partition = quick_sort_partition (data, attribute, low, high, high) // Choosing the last as pivot.
        quick_sort_util (data, attribute, low, partition - 1)
        quick_sort_util (data, attribute, partition + 1, high)
    }
}

function quick_sort_partition (data, attribute, low, high, pivot) {
    let index = low;
    for (let i = low; i <= high; i++) {
        if(compareTo (data[i], data[pivot], attribute) < 0) {
            swap (data, index, i);
            index++;
        }
    }
    swap (data, index, pivot)
    return index;
}

/**
 * 
 * @param {*} data 
 * @param {*} attribute 
 */
function merge_sort (data, attribute) {
    start_time = new Date ().getTime()
    merge_sort_util (data, attribute , 0, data.length - 1);
    end_time = new Date ().getTime();
    return {data: data, execution_time: end_time - start_time}
}

function merge_sort_util (data, attribute, low, high) {
    if(low < high) {
        let mid = Math.floor((low + high) / 2)
        this.merge_sort_util(data, attribute, low, mid)
        this.merge_sort_util (data, attribute, mid+1, high)
        this.merge_util (data, attribute, low, mid, high)
    }
}

function merge_util (data, attribute, low, mid, high) {
    let result = [];
    let left = low;
    let right = mid + 1;
    
    while(left <= mid && right <= high) {
        if(compareTo (data[left], data[right], attribute) <= 0) {
            result.push (data[left])
            left++;
        } else {
            result.push(data[right])
            right++;
        }
    }
    while (left <= mid) {
        result.push(data[left])
        left++;
    }
    while(right <= high) {
        result.push(data[right])
        right++
    }
    let index = 0;
    for (let i = low; i <= high; i++) {
        data[i] = result[index];
        index++;
    }
}
/**
 * 
 * @param {*} data 
 * @param {*} attribute 
 */
function insertion_sort (data, attribute) {
    swap_count = 0;
    start_time = new Date().getTime();
    for (let i = 1; i < data.length; i++) {
        let key = data[i];
        let j = i - 1;
        while (j >= 0 && (compareTo (data[j], key, attribute) > 0)) {
            data[j+1] = data[j]
            j--;
            swap_count++;
        }
        data[j+1] = key;
    }
    end_time = new Date ().getTime();
    execution_time = end_time - start_time
    return {data: data, execution_time: end_time - start_time, swap_count: swap_count};
}

/**
 * 
 * @param {*} data 
 * @param {*} attribute 
 */
function bubble_sort (data, attribute) {
    swap_count = 0;
    start_time = new Date().getTime();
    for (let i = 0; i < data.length; i++) 
        for (let j = 0; j < data.length - i - 1; j++) 
            if(compareTo (data[j], data[j+1], attribute) > 0)
                swap(data, j, j+1)
    end_time = new Date ().getTime();
    return {data: data, execution_time: end_time - start_time, swap_count: swap_count};
}
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
function compareTo (first, second, attribute) {
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