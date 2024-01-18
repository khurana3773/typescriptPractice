import { LinkedList, createSinglyLinkedList, printLinkedList } from './singlyLinkedList';

function returnKthToLastElement<T>(head: LinkedList.Node<T>, k: number): LinkedList.Node<T> {
    let iter = head;
    let counter = 0;
    let runner = head;
    while(runner != null) {
        if(counter > k) {
            iter = iter.next!;
        }
        runner = runner.next!;
        counter++;
    }
    return iter;
}

let linkedList = createSinglyLinkedList([1,2,3,4,5,6]);
console.log(returnKthToLastElement(linkedList!, 2).data);
