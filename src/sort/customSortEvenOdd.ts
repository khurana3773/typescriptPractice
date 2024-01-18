function sortArrayByParity(nums: number[]): number[] {
    nums.sort((a,b) => {
        if(a%2 === 0 && b%2 === 0) {
            return a - b;
        } else if(a%2 === 0 ) {
            return -1;
        } else if(b%2 === 0) {
            return 1;
        } else {
            return a - b;
        }
    });
    
    return nums;
    
};

console.log(sortArrayByParity([1,3,2,4]));