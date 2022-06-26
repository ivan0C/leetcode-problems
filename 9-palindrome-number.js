/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    let checkNumber = 0;
    let step = 1;
    while (checkNumber < x) {
        step *= 10;
        checkNumber *= 10;
        checkNumber += (x % step / step * 10) | 0
        if (checkNumber === 0){
            return false
        }
    }
    return (checkNumber === x);
};