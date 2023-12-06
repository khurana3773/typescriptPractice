export namespace LinkedList {

    export class Node<T>{
        data: T;
        next: Node<T> | undefined;

        constructor(data: T) {
            this.data = data;
        }
    }
}

export function createSinglyLinkedList<T>(inputArr: T[]): LinkedList.Node<T> | null {
    if(!inputArr.length) { 
        return null;
    }

    // keep ref of head as we want to return it
    const head = new LinkedList.Node<T>(inputArr[0]);

    let previousElement =  head;

    inputArr.slice(1).forEach(element => {
        const newNode = new LinkedList.Node<T>(element);
        previousElement.next = newNode;
        previousElement = newNode;
    });
    
    return head;    
}

export function printLinkedList<T>(headNode: LinkedList.Node<T>): void {
  let iter: LinkedList.Node<T> | undefined | null = headNode;

  while(iter !== null || iter!==undefined) {
    console.log(iter!.data);
    iter = iter!.next;
  }    
}

export function removeDupNode (d: number): void {


}



