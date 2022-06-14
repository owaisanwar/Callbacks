/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/
let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

let chainMap = function(...args) {
    let [value, cb1, cb2, cb3] = args;
    let res1 = cb1(value);
    if(!cb2) {
        return res1;
    }
    let res2 = cb2(res1);
    if(!cb3) {
        return res2;
    }
    let res3 = cb3(res2);
    return res3;
};

console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(25, add5));                // 30





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
