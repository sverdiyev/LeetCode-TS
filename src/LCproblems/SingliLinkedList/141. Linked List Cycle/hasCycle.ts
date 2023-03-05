import { ListNode } from "../../../utils/LinkedLists";

function hasCycle(head: ListNode | null): boolean {
  const map = new Map();

  while (head) {
    if (map.get(head)) return true;

    map.set(head, 1);

    head = head.next;
  }

  return false;
}
