import { ListNode, makeLinkedList } from "../../../../utils/LinkedLists";

/**
 * this solution cane to my mind straight away, but it is not perfect - iteration twice over the list, once - only to find the length etc.
 *
 * On top of that, this implementation is not finished - it does not work with linked lists of length 1. Possible to fix, but found better solution.
 *
 * */
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

/**
 * Better solution:
 * Use two pointers. One at head[-1], second at head[0+n], where N = number of nodes from the end, and iterate by one.
 *
 * so when the second pointer reaches the end of the list, first pointer will be one node BEFORE the one which needs to be deleted. So we can simply reassign the next and skip the targeted element;
 *
 *{@link https://www.youtube.com/watch?v=XVuQxVej6y8&ab_channel=NeetCode}
 *
 * TIP: tend to use dummyNodes and returning dummyNode.next
 * */

function removeNthFromEndBetter(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummyNode = new ListNode(0, head);
  let left: ListNode | null = dummyNode;
  let right: ListNode | null = head;

  //setting right pointer to correct position
  for (let i = 0; i < n; i++) {
    right = right?.next || null;
  }

  while (right) {
    left = left?.next || null;
    right = right?.next || null;
  }

  //right hits the end of the list
  if (left) {
    left.next = left?.next?.next || null;
  }
  return dummyNode.next;
}

removeNthFromEndBetter(makeLinkedList([1]), 1);
