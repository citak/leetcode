const assert = require("node:assert");

/**
 * Runtime: 63 ms, faster than 98.72% of JavaScript
 * online submissions for Two Sum.
 * 
 * Memory Usage: 43 MB, less than 38.77% of JavaScript
 * online submissions for Two Sum.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];  
        const needed = target - num;
        if (numsObj.hasOwnProperty(needed)) {
            return [numsObj[needed], i];
        }
        numsObj[num] = i;
    }
    return [];
};

assert.deepEqual(twoSum([2,7,11,15], 9), [0,1]);
assert.deepEqual(twoSum([3,2,4], 6), [1,2]);
assert.deepEqual(twoSum([3,3], 6), [0,1]);