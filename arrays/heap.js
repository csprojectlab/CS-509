function heap_sort (data, attribute) {
    swap_count = 0;
    start_time = new Date ().getTime();
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i]);
        upHeapify(arr, attribute, arr.length - 1)
    }   
    // Now the arr contains the data in heap form. MIN HEAP.
    data = [];
    while(arr.length > 1) {
        data.push(arr[0]);     // Top of the heap.
        let temp = arr.pop();   // Get the last element.
        arr[0] = temp;
        downHeapify (arr, attribute, 0);
    }
    data.push(arr.pop())   // Pushing the last element.
    end_time = new Date ().getTime();
    let obj =  {data: data, execution_time: end_time - start_time, swap_count: swap_count}
    swap_count = 0;
    return obj;    
}

function downHeapify (data, attribute, parent_index) {
    let lci = 2*parent_index + 1;
    let rci = lci + 1;
    let my_index =  parent_index;
    if(lci < data.length && (compareTo (data[my_index], data[lci] , attribute) > 0))
        my_index = lci;
    if(rci < data.length && (compareTo (data[my_index], data[rci], attribute) > 0))
        my_index = rci;
    if(my_index !== parent_index) {
        swap (data, my_index, parent_index)
        downHeapify (data, attribute, my_index);
    }
}

function upHeapify(data, attribute, child_index) {
    if(child_index == 0)    return;
    let parent_index = Math.floor((child_index - 1) / 2)
    if(compareTo (data[child_index], data[parent_index], attribute) < 0) {
        swap (data, parent_index, child_index);
        upHeapify (data, attribute, parent_index);
    }
}
