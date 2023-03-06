import { ListNode, makeLinkedList } from "../../../../utils/LinkedLists";

export function reverseLinkedList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;

  while (head) {
    const nextEl = head?.next || null;
    head.next = newHead;
    newHead = head;

    head = nextEl;
  }
  return newHead;
}

const list1 = makeLinkedList([1, 2, 3, 4, 5]);

reverseLinkedList(list1);
