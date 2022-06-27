/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let result = strs[0], i = 1;
    while (i < strs.length) {
        let concatedPerfix = "";
        const str1 = strs[i];
        const loopIterNumber = str1.length > result.length ? str1.length : result.length;
        for (let j = 0; j < loopIterNumber; j++) {
            const symbolToConcat = str1[j] === result[j] ? str1[j] : "";
            if (!symbolToConcat) break;
            concatedPerfix = concatedPerfix.concat(symbolToConcat);
        }
        if (!concatedPerfix) return "";

        result = concatedPerfix;
        i++;
    }
    return result;
}
