////TypeScript Demo 
//// Data Types
//// -----1. Place JS code in here - it works!-----
//  var name = "Deepa";
//  console.log("1st Character in name is : " + name.substr(0,1);
// //// -----2. DataTypes!-----
// //// Basic : String, Integer,Boolean (note the annotation)
// //// Others: Array .
// //// New in Typescript:    
// ////   Any,Tuples, Enum
var fname = "joe";
var lname = "smith";
var num = 123456;
var IsMax = false;
var IsOld;
IsOld = true;
console.log("First Name is " + fname);
console.log(num);
console.log(IsMax);
// // // // //Template Strings (these can span multiple lines and have embedded expressions. Surrounded by backquote `)
// // // //  let message: string = `Welcome ${fname}!
// // // //  You are enrolled in typescript course now!` 
// // // // console.log("\n")
// // // // console.log("Template  String Example: " + message);
var arr1 = [2, 4, 6, 8];
var arr2 = ["a", "b", "c", "d"];
console.log("arr2 is " + arr2);
// // // // //// Error In Code (Click on the red underline and see error in sublime)
arr2[4] = 10;
arr2 = [false, true];
fname = "hello";
IsMax = "false";
IsOld = 1;
// // // // //No Error
// // // // arr1 = [1,2,3];
// //Tuples
////the type of a fixed number of elements is known, but need not be the same
var info;
info = ["joe", 18];
info = ['joe', 18, 90, "johnny"];
console.log("\n");
console.log("Tuple example - Info is " + info);
console.log("Tuple example - Info at index 1 is " + info[1]);
//info = [18,"joe"];
// // // ////Error - assign numeric to info[0]
// // // ////Enum
var Fruit;
(function (Fruit) {
    Fruit[Fruit["apple"] = 11] = "apple";
    Fruit[Fruit["orange"] = 12] = "orange";
    Fruit[Fruit["banana"] = 13] = "banana";
    Fruit[Fruit["kiwi"] = 14] = "kiwi";
})(Fruit || (Fruit = {}));
;
var f = Fruit[11];
console.log("Fruit is " + f);
// console.log("Fruit is " + Fruit[0]);
console.log("Fruit is " + Fruit.orange);
// // ////Anyvar
var anyVar = "ggggggg";
anyVar = "anyvar is a string";
anyVar = false;
console.log("Anyvar = " + anyVar);
function foo1(tmp) {
    console.log("\n");
    console.log("Coords are (x,y) " + tmp.x + "," + tmp.y);
    if (tmp.z) {
        console.log("Z coord is " + tmp.z);
    }
}
var coord1 = { x: 10, y: -10 };
foo1(coord1);
var coord2 = { x: 10, y: -10, z: 6 };
foo1(coord2);
// ////errors 
// var coord3 = {y:-10, z:6};
// foo1(coord3);
// //More on functions
// function helloWorld(message: string) {
//     return message
// }
// console.log("\n");
// helloWorld("Hi There");
// ////Error condition 
// //// Class definitions
// // class Person {
// //     fname: string;
// //     lname: string;
// // 	   old: number;
// // 	private cash: number;
// //     constructor(name: string, age: number) {
// //       this.fname = name;
// // 	  this.old = age;
// //     }
// //     personInfo() {
// //       return "Employee is " + this.fname + " and he is " + this.old + " years old";
// //     }
// //     agePerson() {
// //       return this.old + 10;
// //     }
// // }
// // let employee1 = new Person("Joe",18);
// // console.log(employee1.personInfo());
// // interface Name {
// //    fname: string;
// //    old: number;
// // }
// // function greet(person : Person) {
// //     return "Hello, " + person.fname;
// // }
// // var johnny = new Person("Johnny", 10);
// // console.log(greet(johnny));
// ////Error condition
// //Inheritance:
// // class Student extends Person {
// //    constructor(public studentName) {super(studentName,0)};
// //    personInfo() {
// //      return "Student is " + this.studentName;
// //    }
// // }
// // var student1 = new Student("Maggie");
// // console.log(student1.personInfo());
// // console.log("Age is " + student1.agePerson());
