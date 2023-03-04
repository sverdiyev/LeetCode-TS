import { ListNode, makeLinkedList } from "../../../utils/LinkedLists";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const dummyOriginalHead = new ListNode();
  let dummyCurrHead = dummyOriginalHead;

  let l1Head: ListNode | null = list1;
  let l2Head: ListNode | null = list2;

  while (l1Head && l2Head) {
    if (l1Head.val >= l2Head.val) {
      dummyCurrHead.next = l2Head;
      l2Head = l2Head.next || null;
    } else {
      dummyCurrHead.next = l1Head;
      l1Head = l1Head.next || null;
    }
    dummyCurrHead = dummyCurrHead.next;
  }

  if (l1Head && !l2Head) {
    dummyCurrHead.next = l1Head;
  } else {
    dummyCurrHead.next = l2Head;
  }

  return dummyOriginalHead.next;
}

const list1 = makeLinkedList([-10, -9, -6, -4, 1, 9, 9]);
const list2 = makeLinkedList([-5, -3, 0, 7, 8, 8]);

mergeTwoLists(list1, list2);
