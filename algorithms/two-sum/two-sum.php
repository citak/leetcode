<?php

class Solution {

    /**
    * Runtime: 14 ms, faster than 98.94% of PHP online
    * submissions for Two Sum.Memory Usage: 20.1 MB,
    * less than 48.44% of PHP online submissions for Two Sum.
    *
    * @param Integer[] $nums
    * @param Integer $target
    * @return Integer[]
    */
    function twoSum(array $nums, int $target): array {
        $numArr = [];
        foreach ($nums as $i => $num) {
            $needed = $target - $num;
            if (isset($numArr[$needed])) {
                return [$i, $numArr[$needed]];
            }
            $numArr[$num] = $i;
        }
        return [];
    }
}