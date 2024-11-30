
var once = function (fn) {
    // console.log(called);
    return function (...args) {
        console.log(called);
        if (called) return undefined;
        called = true;
        return fn(...args);
    }
};
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
let called = false;
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn


