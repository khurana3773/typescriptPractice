// let sampleCase = [3,7,5,6,2];
let sampleCase2 = [2,3,4,4,5,9,7,8,6,10,4,5,10,10,8,4,6,4,10,1];

let retArr: number[] =[];
let minLength = sampleCase2.length;


function arrayPartition(inputArr: number[], leftPart: number[], rightPart: number[]) {    
    if(inputArr.length === 0) {
        if(sum(leftPart) > sum(rightPart)) {
            if(leftPart.length < minLength) {
                retArr = leftPart;
                minLength = leftPart.length;
                console.log('min length updated', retArr.length);
                console.log('retArr updated', retArr);
            } else if( leftPart.length === minLength && sum(leftPart)> sum(retArr)) {
                retArr = leftPart;
                minLength = leftPart.length;
                console.log('retArr updated due to greater sum', retArr);
            }
            
        }
        return;
    }

    let [firstElement,...newArr] = inputArr;

    // add to left part and recurse the rest
    arrayPartition(newArr, [...leftPart, firstElement], [...rightPart])

    // add to right part and recurse the rest errors maximum calls reach Mayya
    arrayPartition(newArr, [...leftPart], [...rightPart, firstElement])
}

function sum(inputArr: number[]): number {
    if(!inputArr || inputArr.length === 0) {
        return 0;
    }
    return inputArr.reduce((partialSum, a) => partialSum + a, 0);
}
    

console.log(arrayPartition(sampleCase2, [], []));

console.log(retArr.sort((x,y)=> x - y));
