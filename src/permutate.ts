import * as _ from 'lodash';

function permute(nums: number[]): number[][] {
    let retValues: Set<string> = new Set();

    helper([], nums, retValues);
   

    return Array.from(retValues, x=> JSON.parse(x));
};

function helper(currNum: number[], remainingNums: number[], retValues: Set<string>) {

    if(remainingNums.length === 0) {
        retValues.add(JSON.stringify(currNum));
        console.log(currNum);
        return;
    }

     for(let i = 0; i< remainingNums.length; i++) {
        let remainingNumsClone = _.cloneDeep(remainingNums);
        let currNumClone = _.cloneDeep(currNum);
        let [thisNum] = remainingNumsClone.splice(i,1);
        currNumClone.push(thisNum);
         helper(currNumClone, remainingNumsClone, retValues);
    }

}

console.log(permute([1,2,3]));