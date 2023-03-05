import { ListNode, makeLinkedList } from "../../../../utils/LinkedLists";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let tmpHead = head;

  while (tmpHead) {
    tmpHead = tmpHead.next;
    length++;
  }

  let nodesToTarget = length - n;
  tmpHead = head;

  while (tmpHead) {
    if (nodesToTarget === 1) {
      tmpHead.next = tmpHead.next?.next || null;
      break;
    } else {
      tmpHead = tmpHead.next;

      nodesToTarget--;
    }
  }

  return head;
}

removeNthFromEnd(makeLinkedList([1, 2, 3, 4, 5]), 2);
