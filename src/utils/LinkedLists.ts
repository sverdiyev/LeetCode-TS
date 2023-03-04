export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// eslint-disable-next-line
export const makeLinkedList = (arr: Array<any>): ListNode | null => {
  const originalHead = new ListNode();
  let movedHead = originalHead;
  for (const el of arr) {
    const newListNode = new ListNode(el);

    movedHead.next = newListNode;

    movedHead = movedHead.next;
  }

  return originalHead.next;
};
