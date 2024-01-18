type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {

    let retArray = new Array(arr1.length + arr2.length);

    let sorter = (a: { id: number }, b: { id: number }) => a.id - b.id;

    arr1.sort(sorter);
    arr2.sort(sorter);

    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i].id === arr2[j].id){
            retArray[i+j] = {...arr1[i], ...arr2[j]};
            i++;
            j++;
        } else

        if(arr1[i].id < arr2[j].id) {
            retArray[i+j] = {...arr1[i]};
            i++;
        } else

        if(arr1[i].id > arr2[j].id) {
            retArray[i+j] = {...arr2[j]};
            j++;
        }
    }

    if(i >= arr1.length ) {
        for(;j<arr2.length; j++) {
            retArray[i+j] = {...arr2[j]};
        }
    }

    
    if(j >= arr2.length ) {
        for(;i<arr1.length; i++) {
            retArray[i+j] = {...arr1[i]};
        }
    }



    return retArray;

    
};

console.log(join([{"id": 1,"x": 1},{"id": 2,"x": 9}], [{"id": 3,"x": 5}]));