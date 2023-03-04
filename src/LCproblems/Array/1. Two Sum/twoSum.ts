export function twoSum(nums: number[], target: number): number[] {
  const map: { [k: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const remaining = target - num;
    if (remaining in map) {
      return [map[remaining], i];
    }

    map[num] = i;
  }

  return [];
}

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);
