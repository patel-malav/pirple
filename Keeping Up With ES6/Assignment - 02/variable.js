/*
 * Title : Assignment 02
 * File Name : variable.js
 * Location : P:\Pirple\Assignment - 02\variable.js
 * Type : Pirple Assignment 02
 * Author : Malav
 * Data : 05/03/2019 (dd/mm/yyyy)
 * Description : Explanation For Difference Between ES5 : Var, ES6 : Let & ES6 : Const
 */

/*
 * ES5 : Var
 * var is used to declare any variable used in javascript ie. a placeholder name for any
 * data type int, float, boolean, string, data, object.
 * The ES5 var is a bad approach to programming as if allows declaration & use of variable
 * of same name within the a function scope even if the localscope is not approprite.
 *
 * ES6 : Let and Const
 * let is used to declare any variable same as a var but the scope of the let is Defined by
 * the { } parentheses so that we can use it only in scope Defined by parentheses and not outside
 *
 * const is used to declare variable that are going to remain constant through out the scope
 * defined by { } parentheses same as let and also we can not modify the data once set or it
 * will result in error.
 */

// var Usage Demo showing that it allows outside of localscope
function varDemo() {
    var newMan = "STRONG MAN";
    if (true) {
        var newMan = "NOT A MAN";
        console.log("variable newMan Inside Local Scope : " + newMan);
    }
    console.log("variable newMan Outside Local Scope : " + newMan);
}

// let Usage Demo showing that it follows scope rules will print "STRONG MAN" on
// second console log statement
function letDemo() {
    let newMan = "STRONG MAN";
    if (true) {
        let newMan = "NOT A MAN";
        console.log("let newMan Inside Local Scope : " + newMan);
    }
    console.log("let newMan Outside Local Scope : " + newMan);
}

letDemo();

// const Usage Demo showing error will be shown when we try to change value of
// const pie
let constDemo = function() {
    const pie = 3.14;
    let radius = 2,
        circumference;
    area = 2 * pie * radius;
    if (area > 30) {
        // This Will Result into error
        pie = 3.14159;
        console.log(circumference);
    }
}

constDemo();
