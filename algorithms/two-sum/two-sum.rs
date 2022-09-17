use std::collections::HashMap;
struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut numsMap: HashMap<i32, usize> = HashMap::new();
        for (i, num) in nums.into_iter().enumerate() {
            let needed = target - num;
            if let Some(&val) = numsMap.get(&needed) {
                return vec![val as i32, i as i32];
            }
            numsMap.insert(num, i);
        }
        return vec![];
    }
}

fn main() {
    assert_eq!(Solution::two_sum(vec![2, 7, 11, 15], 9), vec![0, 1]);
}