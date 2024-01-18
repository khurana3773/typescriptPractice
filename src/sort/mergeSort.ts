import _ from 'lodash';

function mergeSort(inputArr: number[]) {
    if(inputArr.length ===1) {
        return inputArr[0];
    }
    const mid: number = Math.floor(0 + inputArr.length - 1)/2;

    const leftArr = _.clone(inputArr.slice(0, mid));
    const rightArr = _.clone(inputArr.slice(mid, inputArr.length - 1));
    
    merge(leftArr, rightArr);
}

function merge(leftArr: number[], rightArr: number[]) {
    
}