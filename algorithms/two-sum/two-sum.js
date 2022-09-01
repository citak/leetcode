/**
 * Runtime: 64 ms, faster than 98.40% of JavaScript
 * online submissions for Two Sum.
 * Memory Usage: 42.5 MB, less than 61.14% of JavaScript
 * online submissions for Two Su
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
            return [i, numsObj[needed]];
        }
        numsObj[num] = i;
    }
    return [];
};