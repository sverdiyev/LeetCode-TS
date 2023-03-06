import { ListNode } from "../../../../utils/LinkedLists";

/**
 * Time o(N)
 *
 * Space O(n) cuz creating hashmap with all values
 *
 * */
function hasCycle(head: ListNode | null): boolean {
  const map = new Map();

  while (head) {
    if (map.get(head)) return true;

    map.set(head, 1);

    head = head.next;
  }

  return false;
}

/**
 * {@link https://www.youtube.com/watch?v=gBTe7lFR3vc&ab_channel=NeetCode}
 *
 *
 * Time o(N)
 *
 * Space O(1) cuz NOT creating hashmap with all values
 *
 * */

function hasCyclePointers(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast?.next?.next || null;

    if (fast == slow) return true;
  }
  return false;
}
