function seqSearch(arr, data){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] == data){
            return i;
        }
    }
    return -1;
}
function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//swap function 
function swap(arr, index, index1){
    let temp = arr[index];
    arr[index] = arr[index1];
    arr[index] = temp;
}


// sequence search with self organisation
function seqSearchSelf(){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] == data){
            if(i > 0){
                swap(arr, i, i - 1);
            }
            return true;
        }
    }
    return false;
}
function binarySearch(arr, data){
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while(lowerBound <= upperBound){
        let mid = Math.floor((upperBound + lowerBound) / 2);
        //display the mid point
        console.log("Current Mid Point :",mid);
        if(arr[mid] < data){
            lowerBound = mid + 1;
        }else if(arr[mid] > data){
            upperBound = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}

//counting occurence
function count(arr, data){
    let count  = 0;
    let position = binarySearch(arr, data);
    if(position > -1){
        count = 1;
        //count to the left;
        let left = position - 1;
        while(left >= 0 && arr[left] === data){
            count ++;
            left--
        }
        //count to the right
        let right = position + 1;
        while(right >= 0 && arr[right] == data){
            count++;
            right++
        }
    }
    return count;
}