export function findNumbersGreaterThan(inputArr: number[], target: number): number {
    let leftIndex = 0;
    let rightIndex = inputArr.length;
    let midIndex: number;

    while(leftIndex<= rightIndex) {   
        midIndex = Math.floor((leftIndex + rightIndex)/2);
        if(midIndex === target) {
            return midIndex;
        } 

        if(target < inputArr[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }

    return leftIndex;    
}


let inputArr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let target = 5.5;
console.log(findNumbersGreaterThan(inputArr, target), 'value returned');



