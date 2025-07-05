function CArray(numElements) {
    this.dataStore = [];
    this.gaps = [5, 3, 1];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.shellSort = shellSort;
     this.mergeArray = mergeArray;
    this.mergeSort = mergeSort;
   
    for (let i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}
function setData() {
    for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
}
    }
function clear() {
    for (let i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// function bubbleSort(){
//     let numElements = this.dataStore.lenth;
//     let temp;
//     for(let outer = numElements; outer >= 2; --outer){
//         for(let inner = 0; inner <= outer - 1; ++inner){
//             if(this.dataStore[inner] > this.dataStore[inner+1]){
//                 this.swap(this.dataStore, inner, inner+1);
//             }
//         }
//     }
// }
function bubbleSort() {
let numElements = this.dataStore.length;
let temp;
for (let  outer = numElements; outer >= 2; --outer) {
    for (let  inner = 0; inner <= outer-1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner+1]) {
            swap(this.dataStore, inner, inner+1);
        }
    }
    // return this.toString();
    }
    return this.toString();
}
function selectionSort(){
    let min, temp;
    for(let outer = 0; outer <= this.dataStore.length -2; ++outer){
        min = outer;
        for(let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner){
            if(this.dataStore[inner] < this.dataStore[min]){
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
    }
    return this.toString();
}
function insertionSort(){
    let temp, inner;
    for(let outer = 1; outer <= this.dataStore.length - 1; ++outer){
        temp = this.dataStore[outer];
        inner = outer;
        while(inner > 0 && (this.dataStore[inner - 1] >= temp)){
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
    return this.toString();
}
function shellSort(){
    for(let g = 0; g < this.gaps.length; ++g){
        for(let i = this.gaps[g]; i < this.dataStore.length; ++i){
            let temp = this.dataStore[i];
            let j = i
            for(let j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]]; j -= this.gaps[g]){
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
    return this.toString();
}
function mergeArray(arr, startLeft, stopLeft, startRight, stopRight){
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for(let i = 0; i < (rightArr.length - 1); ++i){
        leftArr[i] = arr[k];
        ++k
    }
    k = startLeft;
    for(let i = 0; i < (leftArr.length - 1); ++i){
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    let m = 0;
    let n = 0;
    for(let k = startLeft; k < stopRight; ++k){
        if(leftArr[m] <= rightArr[n]){
            arr[k] = leftArr[m];
            m++;
        }else{
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array -", leftArr);
    console.log("right array -", rightArr);
}
function mergeSort(){
    if(this.dataStore.length < 2){
        return;
    }
    let step = 1;
    let left, right;
    while(step < this.dataStore.length){
        left = 0;
        right = step;
        while(right + step <= this.dataStore.length){
            mergeArray(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
           
        }
        if(right < this.dataStore.length){
            mergeArray(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}
function quickSort(list){
    if(arr.length == 0){
        return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));

}
let numElements = 10;

let mynums = new CArray(numElements);
mynums.setData();
console.log("not sorted: ", mynums.toString());
mynums.bubbleSort();
console.log("bubble sort: ", mynums.toString());
mynums.selectionSort();
console.log("selection sort: ", mynums.toString());
mynums.insertionSort();
console.log("insertion sort: ", mynums.toString());
mynums.shellSort();
console.log("shell sort: ", mynums.toString());
mynums.mergeSort();
console.log("merge sort: ", mynums.toString());