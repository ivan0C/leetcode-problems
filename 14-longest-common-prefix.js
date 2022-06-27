/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        result = intersection(result, strs[i]);
        if (!result) return "";
    }
    return result;
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const intersection = (str1, str2) => {
    let res = "";
    const loopIterNumber = str1.length > str2.length ? str1.length : str2.length;
    for (let i = 0; i < loopIterNumber; i++) {
        const symbolToConcat = str1[i] === str2[i] ? str1[i] : null;
        if (!symbolToConcat) break;
        res = res.concat(symbolToConcat);
    }
    return res;
}
