/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // [3, 2, 4], target = 6
    // create an empty hashmap to stored numbers
    // 3 + x = 6 -> x = 3 (X) -> {{key:3, value:0}}
    // 2 + x = 6 -> x = 4 (X) -> {{3: 0}, {2: 1}}
    // 4 + x = 6 -> x = 2 (O) -> return [ map[2], i]
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        if (map.has(secondNum) !== false) {
            return [map.get(secondNum), i];
        } else {
            map.set(nums[i], i); 
        }
    }
    return 'Not Found!';
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([1.1], 6));

