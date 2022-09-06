/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    else if (!s.length || !t.length) return false;
    
    const sMap = {}, tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] !== tMap[t[i]]) {
            return false;
        }
        sMap[s[i]] = i + 1;
        tMap[t[i]] = i + 1;
    }
    return true;
};
