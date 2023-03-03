import { describe, expect, it } from "@jest/globals";
import { twoSum } from "./twoSum";

describe("twoSum", function () {
  it("should Input: nums = [2,7,11,15], target = 9 Output: [0,1]", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const res = [0, 1];

    expect(twoSum(nums, target)).toEqual(res);
  });
});
