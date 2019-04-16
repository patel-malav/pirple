/*
 * Title : Assignment 03
 * File Name : syllogism.js
 * Location : P:\Pirple\Assignment - 03\syllogism.js
 * Type : Pirple Assignment 03
 * Author : Malav
 * Data : 05/03/2019 (dd/mm/yyyy)
 * Description : Syllogism is Type of Reasoning Required For Conclusion
 */

// Phrase 1 - Syllogism
// All men are mortal
// Socrates is a man.
// Therefore, socrates is mortal.

// Proving Phrase 1
const Man = function(name) {
    this.name = name;
    // All Men are Mortal.
    // Only Man with no Name are Devil.
    this.mortal = function(anyMan) {
        if (!anyMan.name)
            return false;
        else
            return true;
    }
};

// Socrates is a Man.
// Due to Man is Named Socrates.
const newMan = new Man("Socrates");

// Therefore, socrates is mortal.
if (newMan.mortal(newMan)) {
    console.log("New Man Named " + newMan.name + " is Mortal")
} else {
    console.log("New Man Named " + newMan.name + " is Devil")
}

// Phrase 2 - Syllogism
// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.

const Cake = function(type) {
    if (type === "vanilla" || type === "chocolate") {
        this.type = type;
    }
};

let birthdayCake = new Cake("vanilla");

if (birthdayCake.type !== "chocolate") {
    console.log("The Cake Birthday Cake is " + birthdayCake.type + " & Not chocolate");
}
