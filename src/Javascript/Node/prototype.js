
var age = 10;

function Person(name, age) {

}

Person.prototype = {
    getAge: function () { return this.age; }
}

var alex = new Person("Alex",12);

console.log(alex);
console.log(alex.getAge());


"ola".search("l");

"aa123bc4".search("\d\d\d");

"()"; // obter match
"{}";
"[]";
"|";


"*";  //0...*
"?";  //0.1
".";  //
"+";  // 1...*

"\d";  // digito
"\b";  // limite de uma palavra
"\w";  // letra


".+\d{3}";

