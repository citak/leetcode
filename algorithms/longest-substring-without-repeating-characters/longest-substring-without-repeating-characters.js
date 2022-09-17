const assert = require("node:assert");

/**
 * Runtime: 144 ms, faster than 59.03% of JavaScript
 * online submissions for Longest Substring Without
 * Repeating Characters.
 * 
 * Memory Usage: 48.4 MB, less than 48.93% of JavaScript
 * online submissions for Longest Substring Without
 * Repeating Characters.
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const chars = {};
    let max = 0;
    let startAt = 0;
    for (let i = 0; i < s.length; i++) {
        const index = chars[s[i]];
        if (index !== undefined && index >= startAt) {
            startAt = index + 1;
        }
        chars[s[i]] = i;
        const total = (i - startAt) + 1;
        if (total > max) {
            max = total;
        }
    }
    return max;
};

assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
assert.equal(lengthOfLongestSubstring("pwwkew"), 3);