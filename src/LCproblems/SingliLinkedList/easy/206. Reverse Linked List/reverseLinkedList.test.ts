import { describe, expect, it } from "@jest/globals";
import { reverseLinkedList } from "./reverseLinkedList";
import { makeLinkedList } from "~/utils/LinkedLists";

describe("reverseLinkedList", function () {
  it("test 1", function () {
    const list1 = makeLinkedList([1, 2, 3, 4, 5]);
    const res = makeLinkedList([5, 4, 3, 2, 1]);

    expect(reverseLinkedList(list1)).toEqual(res);
  });
});
