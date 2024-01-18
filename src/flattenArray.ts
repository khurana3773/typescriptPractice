type MultiDimensionalArray = (number | MultiDimensionalArray)[];



var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n <= 0) {
        return [...arr];
    }

    let retArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            retArray.push(
                ...(flat(arr[i] as MultiDimensionalArray, n - 1) ?? [])
                );
        } else {
            retArray.push(arr[i]);
        }
    }

    return retArray;
};