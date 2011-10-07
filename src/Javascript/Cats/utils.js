
exports.foreach = function (action, arr) {
    for (var i = 0; i < arr.length; i++) {
        action(arr[i], i, arr);
    }
}

exports.sum = function (numbers) {
    /*
    var total = 0;
    exports.foreach(function (num) { total += num }, numbers);
    return total;
    */
    function add(a, b) { return a + b };
    return exports.reduce(add, 0, numbers);
}

exports.reduce = function (combine, base, arr) {
    var res = base;
    exports.foreach(function (a) {
        res = combine(res, a);
    }, arr);
    return res;
}


exports.countZeros = function (numbers) {
    function countz(a, b) {
        return b == 0 ? ++a : a;
    };
    return exports.reduce(
        countz
        , 0, numbers);
}

var everyOrSome = function (predicate, arr, test) {
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i]) == test)
            return test;
    };
    return !test;
}

exports.every = function (predicate, arr) {
    
    return everyOrSome(predicate, arr, false);
}

exports.some = function (predicate, arr) {
    
    return everyOrSome(predicate, arr, true);
}

exports.power = function (a) {
    return function (b) { return Math.pow(b, a); };
}

exports.map = function (func, arr) {
    var maparr = [];
    for (var i = 0; i < arr.length; i++) {
        maparr[i] = func(arr[i]);
    }
    return maparr;
}

exports.lessThan = function (a) {
    return function (n) { return n < a; };
}

exports.filter = function (predicate, arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i]))
            ret.push(arr[i]);
    }
    return ret;
}