import { ListNode, makeLinkedList } from "../../../../utils/LinkedLists";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const originalHead = head;

  while (head) {
    if (head.val === head.next?.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return originalHead;
}
const list = makeLinkedList([1, 1, 2, 3, 3]);

deleteDuplicates(list);
