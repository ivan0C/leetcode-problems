/**
 * @param {number[]} nums
 * @returns {number[]} 
**/
const removeDuplicates = (nums) => { 
    if (!nums.length || nums.length === 1) return nums;
    let prevElem;
    let markToDelete = false;
    
    for (let i = 0; i < nums.length; i++){
        if (!i) {
            prevElem = nums[i];
            
        }
        else if (markToDelete) {
            prevElem = nums[i];
            nums[i-1] = nums[i];
            nums[i] = undefined;
            markToDelete = false;
            
        }
        else if (prevElem === nums[i]) {
            prevElem = nums[i];
            nums[i] = undefined;
            markToDelete = true;
            
        }
        else {
            prevElem = nums[i];
        }
    }
    return nums;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6, 7]));