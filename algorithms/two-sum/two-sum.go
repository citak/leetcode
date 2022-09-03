/**
 * Runtime: 5 ms, faster than 90.17% of Go
 * online submissions for Two Sum.
 * Memory Usage: 4.3 MB, less than 38.95% of Go
 * online submissions for Two Sum.
 */
func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)
	for i, num := range nums {
		needed := target - num
		if v, exists := numMap[needed]; exists {
			return []int{v, i}
		}
		numMap[num] = i
	}
	return []int{}
}
