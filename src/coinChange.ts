

function coinChange(coins: number[], amount: number): number {
    let memoize = new Map();

    // let helper = (collectedCoins: number[], finalAmount: number): number => {
    //     if(memoize.get(finalAmount)) {
    //         return memoize.get(finalAmount)
    //     }
    //     // n=0 valid solution
    //     // n<0 invalid solution
    //     if (finalAmount === 0) {
    //         return 0;
    //     } else if (finalAmount < 0) {
    //         return -1;
    //     }
    //     let minSteps = Number.MAX_SAFE_INTEGER;
    //     for (let i = 0; i < coins.length; i++) {
    //         let numSteps = helper([coins[i], ...collectedCoins], finalAmount - coins[i]);
    //         if(minSteps > numSteps && numSteps!== -1) {
    //             minSteps = numSteps;
    //         }
    //     }
    //     if(minSteps !== Number.MAX_SAFE_INTEGER && minSteps !==-1) {
    //         memoize.set(finalAmount, minSteps + 1);    
    //     } else {
    //         memoize.set(finalAmount, -1);
    //     }
    //     return memoize.get(finalAmount);
    // }

    // return helper([], amount);
    memoize.set(0, 0);

    for(let i =0;i < coins.length;i++){
        memoize.set(coins[i], 1);
    }

    for(let i =1 ;i <= amount; i++){
        let min = Number.MAX_SAFE_INTEGER;
        for(let j=0; j<coins.length; j++) {

            let coinsNeededBefore = memoize.get(i - coins[j]);
            if(coinsNeededBefore && coinsNeededBefore!=-1) {
                if(min > coinsNeededBefore + 1) {
                    min = coinsNeededBefore + 1;
                }
            }
        }
        if(min !== Number.MAX_SAFE_INTEGER) {
            memoize.set(i, min);
        } else {
            memoize.set(i, -1);
        }
    }

    return memoize.get(amount);
};


// console.log(coinChange([1,2,5], 11));