import { ListNode, makeLinkedList } from "~/utils/LinkedLists";

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let curr = head;

  while (curr) {
    putLastNodeBetweenFirstAndSecond(curr);
    curr = curr.next?.next || null;
  }
}

const putLastNodeBetweenFirstAndSecond = (head: ListNode): void => {
  let pointer = head;
  let pointerMinusOne = pointer;

  while (pointer?.next) {
    pointerMinusOne = pointer;
    pointer = pointer.next;
  }

  const tmp = head?.next;

  head.next = pointer;
  pointer.next = tmp;
  pointerMinusOne.next = null;
};

reorderList(makeLinkedList([1, 2, 3, 4, 5]));
