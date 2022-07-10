/**
 * @param {number[]} nums
 * @returns {number} 
**/
const removeDuplicates = (nums) => { 
    if (!nums.length || nums.length === 1) return nums;
    let i = 1;
    let undefCount = 0;
    while (true) {
        if (i > nums.length - 1) {
            break;
        }
        else if (nums[i - 1] === nums[i]) {
            nums[i] = nums[i - 1];
            nums[i - 1] = undefined;
            undefCount++;
        }
        i++;
    };
    nums.sort((a, b) => a - b);
    return nums.length - undefCount;
};