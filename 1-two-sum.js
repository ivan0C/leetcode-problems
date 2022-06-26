
const nums = [11, 2, 7, 15, 1, 3, 4,], target = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const savedNumbers = [];
    for (let i = 0; i < nums.length; i++){
        const item = nums[i];
        foundIndex = savedNumbers.indexOf(item);
        if (foundIndex !== -1) {
            return ([foundIndex, i]);
        }
        savedNumbers.push(target - item);
    }

};

console.log(twoSum(nums, target))