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
    if(strs.length == 1){
        return strs[0]
    }
    strs.sort()
    console.log(strs,'排序之后的strs');
    for (let index = 0; index < strs.length; index++) {

    }
};
longestCommonPrefix(["flower","flow","flight"])
console.log('longestCommonPrefix',longestCommonPrefix(["assssssllll","eererersdfdsfg","adfdgfd"]))