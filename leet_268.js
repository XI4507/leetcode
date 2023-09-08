// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = 0;
  for (let i = 1; i <= nums.length; i++) {
    total += i;
  }
  let arraySum = 0;
  for (let i = 0; i < nums.length; i++) {
    arraySum += nums[i];
  }
  return total - arraySum;
};
