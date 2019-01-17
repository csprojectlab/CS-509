let swap_count = 0;
let start_time = 0;
let end_time = 0;

function selection_sort (data, attribute) {
    start_time = new Date ().getTime();
    for (let i = 0; i < data.length; i++) {
        let min_index = i;
        let min = data[i];
        for (let j = i + 1; j < data.length; j++) {
            if(compareTo (data[j], min, attribute) < 0) {
                min_index = j;
                min = data[j];
            }
        }
        swap (data, min_index, i);
    }
    end_time = new Date ().getTime();
    let obj =  {data: data, execution_time: end_time - start_time, swap_count: swap_count}
    swap_count = 0;
    return obj;
}

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
    let obj =  {data: data, execution_time: end_time - start_time, swap_count: swap_count};
    swap_count = 0;
    return obj;
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
    let obj =  {data: data, execution_time: end_time - start_time, swap_count: swap_count};
    swap_count = 0;
    return obj;
}


