// 1. Ways to print in JS:
// console.log("first way");
// alert("second way")
document.write("Write with Document / third way")

// 2. JS console API(Application Programming Interface)
console.log("hello world!", 10 + 20, "another log")
console.error("this is an error")
console.warn("this is warning")
console.assert(4 == 2)

// 3. Variables:Containers to store data values.
var num1 = 2;
var num2 = 2;
// console.log(num1 + num2);

/* 4.
Multi-
    line-
         comments 
                  */

// 5. Datatypes:
var num = 3;            // i) -- numbers
var num = 56.09;        // (decimals also)
var str = "2nd type";   // ii) -- strings
var str = '2nd type';   // (in single quote also)
var obj = {             // iii) -- objects {key-value pair}
    sania: 32,
    neha: 32,
    owais: 23
}
// console.log(obj);

var a = true;            // iv) -- booleans
var b = false;
// console.log(a, b);

var arr = [1, 2, "sania", true, 5]  // v) -- Array(A collection of diff elements)
// console.log(arr);

/*
At a very high level,there are two types of datatypes in JS:
1-Primitive data types: undefined, null, number, strings, boolean, symbol
2-Reference data types: Arrays and Objects
*/

// 5. Logical operators:

// i) And && 
//console.log(true && true);  // 2no conditions true honi chahiye
//console.log(true && false);
// ii) Or ||
//console.log(true || true);   // ek bhi condition true ho chalega
//console.log(true || false);
// iii) Not !
//console.log(!true);  //sach ko jhoot
//console.log(!false); //jhoot ko sach

// 6. Functions:
function avg(a, b) {
    // console.log(a + b);
    return avg
}
// DRY = Do not repeat yourself
avg(3, 7)
avg(5, 9)

// 7. Conditions (If and Else)
//if (age < 35) {
// console.log("Your not eligible");
//} else {
// console.log("Your eligible");
//}

//Modules: //1- default modules:

import object from "./module.js"
console.log(object); //{mod: Array(4), eg: Array(5)}
console.log(object.eg); //(5) [1, 2, 3, 4, 5]
console.log(object.mod); //(4) ['a', 'b', 'c', 'd']

//Modules: //2- Main modules:
import { func as fun, sub } from "./module.js"
fun(2, 2)
sub(6, 3)

import { obje } from "./module.js" // hand-to-hand export/import
console.log(obje);


//Maps:(Object Type)
let myMap = new Map()
myMap.set("name", "sania")
myMap.set("id", 1)
myMap.set(true, "active")
console.log(myMap, myMap.size);

console.log(myMap.get("name"))

console.log(myMap.has("id")); //true
console.log(myMap.has("rollno")); //false

// console.log(myMap.delete("id"));
// console.log(myMap);

// console.log(myMap.clear());
// console.log(myMap);

let mymap = new Map([["a", 1], ["b", 2], ["c", 3]])
console.log(mymap);

for (let [key, value] of myMap) {
    console.log(myMap)
};
for (let keys of myMap.keys()) {
    console.log("key is :", keys);
}
for (let values of myMap.values()) {
    console.log("values of :", values);
    
}

