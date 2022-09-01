/**
 * Runtime: 62 ms, faster than 99.75% of TypeScript
 * online submissions for Two Sum.
 * Memory Usage: 45.2 MB, less than 43.99% of TypeScript
 * online submissions for Two Sum.
 */
function twoSum(nums: number[], target: number): number[] {
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