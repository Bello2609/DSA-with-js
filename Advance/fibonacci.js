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
