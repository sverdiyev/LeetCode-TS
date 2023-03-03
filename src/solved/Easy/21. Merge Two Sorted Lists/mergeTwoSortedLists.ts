export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();

  let l1Head = list1;
  let l2Head = list2;

  while (list1?.val || list2?.val) {
    if (list1?.val && !list2?.val) {
    }

    if (list1?.val >= list2?.val) {
      dummy.next = list2;
      l2Head = list2?.next || null;
    } else {
      dummy.next = list1;
      l1Head = list1?.next || null;
    }
  }

  return null;
}

//
// const betweenCurrAndNextNode = (l1: ListNode, l2: ListNode) => {
//   return l1.val > l2.val && l1.val < l2.val;
// };
//
// const placeInBetweenCurrAndNextNode = (l1: ListNode, l2: ListNode) => {
//   const tmp2 = l2.next;
//   const tmp1 = l1.next;
//
//   l2.next = l1;
//
//   l1.next = tmp2;
//
//   return [tmp1, tmp2];
// };

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// const l1 = [2, 7, 11, 15];
// const l2 = [2, 7, 11, 15];
// const target = 9;
//
// mergeTwoLists(nums, target);
