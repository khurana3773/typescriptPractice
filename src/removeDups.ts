import { LinkedList, createSinglyLinkedList, printLinkedList } from './singlyLinkedList';

export function removeDupNodeWithBuffer (head: LinkedList.Node<number>): void {
    let set = new Set();

    let iter = head;
    while(iter != null) {
        set.add(iter.data);
        if(set.has(iter?.next?.data)) {
            iter.next = iter?.next?.next;
        }
        iter = iter.next!;
    }
}

export function removeDupNodeWithoutBuffer (head: LinkedList.Node<number>): void {
    let iter = head;
    while(iter.next != null) {
        let currVal = iter.data;
        let newIter = iter;
        while(newIter?.next != null) {
            // basically check if currVal is present in the list, if yes, delete the node..
            if(newIter.next?.data === currVal) {
                newIter.next = newIter.next?.next;
            }
            newIter = newIter.next!;
        }
        iter = iter.next!;
    }
}


let linkedList1 = createSinglyLinkedList([5,3,2,1,4,5,6,7]);
let linkedList2 = createSinglyLinkedList([5,3,2,1,4,5,6,7]);

removeDupNodeWithBuffer(linkedList1!);
removeDupNodeWithoutBuffer(linkedList2!);
printLinkedList(linkedList1!);
printLinkedList(linkedList2!);