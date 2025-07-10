//this is dynamic programming
function dynFib(n){
    let val = [];
    for(let i = 0; i <= n; ++i){
        val[i] = 0;
    }
    val[0] = 0;
    val[1] = 1;
    for(let i = 2; i <= n; ++i){
        val[i] = val[i - 1] + val[i -2];
    }
    return val[n];
}
function lcs(word1, word2){
    let max = 0;
    let index = 0;
    let lcsArr = new Array(word1.length);
    for(let i = 0; i <= word1.length + 1; ++i){
        lcsArr[i] = new Array(word2.length + 1);
        for(let j = 0; j <= word2.length + 1; ++j){
            lcsArr[i][j] = 0;
        }
    }
    for(let i = 0; i <= word1.length; ++i){
        for(let j = 0; j <= word2.length; ++j){
            if(i == 0 || j == 0){
                lcsArr[i][j] = 0;
            }else{
                if(word1[i-1] == word2[j-1]){
                    lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1
                }else{
                    lcsArr[i][j];
                }
            }if(max < lcsArr[i][j]){
                max = lcsArr[i][j];
                index = i;
            }
        }
    }
    let str = "";
    if (max == 0) {
        return "";
    }
    else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }

}
