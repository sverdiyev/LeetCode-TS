import { ListNode } from "../../../../utils/LinkedLists";

/**
 *This one is a bit difficult
 *
 *There is a very elegant solution of going to the end of the list and switching it to the head of the list later.
 *
 * {@link https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49785/java-solution-without-knowing-the-difference-in-len/}
 *
 *I did not come up with this solution, so decided to implement the "stupid" way as I first thought of it
 */

/**
 * solution was not accepted for some reason, not sure what the mistake was. */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  //make them same length
  let lengthL1 = getLengthOfLinkedList(headA); //5
  let lengthL2 = getLengthOfLinkedList(headB); //7

  const diffInLength = lengthL1 - lengthL2;
  if (diffInLength) {
    for (let i = 0; i < Math.abs(diffInLength); i++) {
      if (diffInLength < 0) {
        headA = headA?.next || null;
      } else {
        headB = headB?.next || null;
      }
    }
  }

  //check if same
  while (headA != headB) {
    headA = headA?.next || null;
    headB = headB?.next || null;
  }
  return headA;
}

const getLengthOfLinkedList = (head: ListNode | null) => {
  let length = 0;
  let tmp = head; //creating tmp not to mutate the original list
  while (tmp) {
    tmp = tmp.next;

    length++;
  }
  return length;
};
