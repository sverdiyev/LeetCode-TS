import { describe, expect, it } from "@jest/globals";
import { mergeTwoLists } from "./mergeTwoSortedLists";
import { makeLinkedList } from "~/utils/LinkedLists";

describe("twoSum", function () {
  it("test 1", function () {
    const list1 = makeLinkedList([1, 2, 4]);
    const list2 = makeLinkedList([1, 3, 4]);

    const res = makeLinkedList([1, 1, 2, 3, 4, 4]);

    expect(mergeTwoLists(list1, list2)).toEqual(res);
  });

  it("test 2", function () {
    const list1 = makeLinkedList([-10, -9, -6, -4, 1, 9, 9]);
    const list2 = makeLinkedList([-5, -3, 0, 7, 8, 8]);

    const res = makeLinkedList([-10, -9, -6, -5, -4, -3, 0, 1, 7, 8, 8, 9, 9]);

    expect(mergeTwoLists(list1, list2)).toEqual(res);
  });
});
