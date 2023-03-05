import { ListNode } from "../../../../utils/LinkedLists";

/**
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 *
 * Output: [7,0,8]
 *
 * Explanation: 342 + 465 = 807.
 *
 * */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();

  let dummyHead: ListNode = dummy;

  let carryOver = false;

  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0);

    l1 = l1?.next || null;
    l2 = l2?.next || null;

    if (carryOver) {
      sum += 1;
      carryOver = false;
    }

    if (sum >= 10) {
      sum = sum - 10;
      carryOver = true;
    }

    const newNode = new ListNode(sum);

    dummyHead.next = newNode;

    dummyHead = dummyHead.next;
  }

  if (carryOver) {
    const newNode = new ListNode(1);
    dummyHead.next = newNode;
  }

  return dummy.next;
}
