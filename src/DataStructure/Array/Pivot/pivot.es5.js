/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var left = 0, right = 0;
    for (var a = 0; a < i; a++) {
      left += nums[a];
    }
    for (var b = i + 1; i < b && b < nums.length; b++) {
      right += nums[b];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};

// @lc code=end

module.exports = pivotIndex;