let inputNumber = 2;
let memoize: number[];;

function climbStairs(n: number): number {
    if(!memoize) {
        memoize = new Array(n+1).fill(-1);
    }
    
    if(n === 0 ){
        return 1;
    } else if (n < 0) {
        return 0;
    }

    if(memoize[n] === -1) {
        memoize[n] = climbStairs(n-1) + climbStairs(n-2);
    }

    return memoize[n];
};

function climbStairs2 (n: number) : number {
    let number2: number = 0;
    let number1 = 1;
    let number0 = 1;
    
    if(n === 1) {
        return number1;
    }

    let i = 0;
    for(i = 2; i <= n; i++) {
        number2 = number1 + number0;
        number0 = number1;
        number1 = number2;
    }
    return number2;
}




console.log(climbStairs(inputNumber));
console.log(climbStairs2(inputNumber))

