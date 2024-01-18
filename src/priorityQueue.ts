class MinHeap {
    private data: number[] = [];

    constructor(){}

    queue(input: number): void {
        this.data.push(input);

        let currentIndex = this.data.length - 1;

        while(true) {
            let parentIndex = this.getParentIndex(currentIndex);
            if(parentIndex < 0) {
                break;
            }

            let parentValue = this.data[parentIndex];

            if(parentValue > input) { 
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
        
    }

    peek(): number | undefined {
        return this.data.length ? this.data[0] : undefined;
    }

    dequeue(): number | undefined {   
        let retVal = this.peek();

        if(this.data.length < 2) {
            this.data.pop();
            return retVal;
        }
        
        let lastElement = this.data.pop();
        
        let currentIndex = 0;
        this.data[currentIndex] = lastElement!;

        

        while(true) {
            let smallerChildIndex = this.getValidSmallerChildIndex(currentIndex);
            if(!smallerChildIndex || this.data[smallerChildIndex]>lastElement!) {
                break;
            }

            this.swap(currentIndex, smallerChildIndex);
            currentIndex = smallerChildIndex;
        }
        

        return retVal;
    }

    getValidSmallerChildIndex(parentIndex: number): number | undefined {
        let leftIndex = this.getLeftChildIndex(parentIndex);
        let rightIndex = this.getRightChildIndex(parentIndex);
        let leftVal = this.data[leftIndex];
        let rightVal = this.data[rightIndex];

        if(leftVal && rightVal) {
            return leftVal < rightVal ? leftIndex : rightIndex;
        } else if(!leftVal && !rightVal) {
            return undefined;
        } else {
            return !!leftVal ? leftIndex : rightIndex; 
        }


    }

    swap(indexA: number, indexB: number): void {
        let temp  = this.data[indexA];
        this.data[indexA] = this.data[indexB];
        this.data[indexB] = temp;
    }
    getParentIndex(childIndex: number): number{
        return Math.floor(childIndex - 1)/2;
    }

    getLeftChildIndex(parentIndex: number): number{
        return 2*parentIndex + 1;
    }

    getRightChildIndex(parentIndex: number): number{
        return 2*parentIndex + 2;
    }

    public toString = () : string => {
        return `(${this.data.join(',')})`;
    }
}

// main
(function(){
    // let minHeap = new MinHeap();
    // console.log(minHeap.toString());
    // minHeap.queue(6);
    // console.log(minHeap.toString());
    // minHeap.queue(1);
    // console.log(minHeap.toString());
    // minHeap.queue(2);
    // console.log(minHeap.toString());
    // minHeap.queue(4);
    // console.log(minHeap.toString());



    let minHeap = new MinHeap();
    console.log(minHeap.toString());
    minHeap.queue(4);
    console.log(minHeap.toString());
    minHeap.queue(1);
    console.log(minHeap.toString());
    minHeap.queue(5);
    console.log(minHeap.toString());
    minHeap.queue(3);
    console.log(minHeap.toString());
    minHeap.queue(10);
    console.log(minHeap.toString());


    console.log(minHeap.dequeue());
    console.log(minHeap.toString());
    console.log(minHeap.dequeue());
    console.log(minHeap.toString());
    console.log(minHeap.dequeue());
    console.log(minHeap.toString());
    console.log(minHeap.dequeue());
    console.log(minHeap.toString());
    console.log(minHeap.dequeue());
})();

