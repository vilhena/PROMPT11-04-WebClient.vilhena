var util = require("../Cats/utils.js");

util.foreach(console.log, [1, 2, 3, 4]);

console.log(util.sum([1, 2, 3]));

console.log("Hello World");

console.log(util.countZeros([0, 1, 0, 0, 1, 3, 4, 5, 0]));


console.log(util.every(function (a) { return a % 2 === 0; }, [2, 4]));
console.log(util.some(function (a) { return a % 2 !== 0; }, [2, 4]));
console.log(util.map(util.power(2),[2, 4]));
console.log(util.filter(util.lessThan(3), [2, 4]));
/*

console.log([2, 4].every(isEven));           // true
[2, 4].some(isOdd);             // false
[2, 4].map(power(2));           // [4,16]
[2, 4].filter(lessThan(3));     // [2]


[2, 4].forEach(console.log);    // 2\n4 (na consola)
[2, 4].reduce(concat, "");      // "" + "2" + "4" = "24"
[2, 4].reduceRight(concat, ""); // "" + "4" + "2" = "42"


*/