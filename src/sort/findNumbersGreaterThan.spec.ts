import { findNumbersGreaterThan } from "./findNumbersGreaterThan";

describe('sum module',()=>{
    let inputArr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
    let target = 5.5;
    expect(findNumbersGreaterThan(inputArr, target)).toBe(4);
});


