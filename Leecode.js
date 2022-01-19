/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result= ''
    if(!strs.length){
        return null
    }
    for (let i = 0; i < strs.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if(strs[j][i]!=strs[0][i]) return result;
            result += strs[0][i]
        }
        
    }
    
};

console.log('longestCommonPrefix',longestCommonPrefix(["flower","flow","flight"]))