/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    for (let i = 0; i<nums.length; i++) {
        if (nums.slice(i + 1).reduce((acc, val) => acc + val, 0) === nums.slice(0, i).reduce((acc, val) => acc + val, 0)) {
            return i;
        }
    }
    return -1;
};