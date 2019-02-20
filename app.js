'use strict';
const memo = new Map();//key:順番、value:答えを格納する
memo.set(0,0);//0,1番目の答えはあらかじめ定義されてるのでこれを格納してるコード（メモ）
memo.set(1,1);//key1,値1 を登録しておく
function fib(n){//n番目
    if(memo.has(n)){//keyを渡す。n番目があるかどうか
        return memo.get(n);//あるならそのままmemoの値を取得(0と１)
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);//計算したn番目はvalueというのを追加登録してる
    return value;
}
const length = 40;
for(let i = 0; i<=length; i++){
    console.log(fib(i));
}