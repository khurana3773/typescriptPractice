export function selectionSort(arr: number[]) {
    let i =0;
    for(i = 0; i<arr.length ; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i ; j< arr.length; j++){
            if(arr[j]< min) {
                min = arr[j];
                minIndex = j;
            }
        } 
        swap(arr, i,minIndex);
    }
}

export function swap<T>(arr: T[], i: number, j: number) {
    if(i< 0 || j<0 || i>=arr.length || j>=arr.length) {
        throw Error('invalid indices');
    }

    let temp: T = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


let inputArr = [3,2,1,4,4,4];
selectionSort(inputArr);
console.log(inputArr);
