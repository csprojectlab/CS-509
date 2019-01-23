const size = 20;

function createArray () {
    // let arr = [12, 34, 54, 2, 3];
    let arr = [];
    for (let i = 0; i < size; i++)
        arr.push(Math.round(Math.random()*1000))
    return arr;
}

function shellSort (arr) {
    let hFactor = arr.length;
    for (let h = Math.floor(hFactor / 2); h > 0; h = Math.floor(h / 2)) {
        shellSortUtil(arr, h);
    } 
}

function shellSortUtil (arr, hFactor) {
    for (let i = hFactor; i < arr.length; i++) {
        let key = arr[i];
        let j = i;
        while(j > hFactor - 1 && arr[j - hFactor] >= key) {
            arr[j] = arr[j - hFactor];
            j -= hFactor
        }
        arr[j] = key;
    }
}

function swap (arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function isSorted (arr) {
    for (let i = 0; i < arr.length - 1; i++) 
        if(arr[i] > arr[i+1])
            return false;
    return true;
}

let arr = createArray();
shellSort(arr)
console.log(arr)
console.log(isSorted(arr))