/*
 * Title : Assignment 04
 * File Name : modified-syllogism.js
 * Location : P:\Pirple\Assignment - 04\modified-syllogism.js
 * Type : Pirple Assignment 04
 * Author : Malav
 * Data : 05/03/2019 (dd/mm/yyyy)
 * Description : Syllogism is Type of Reasoning Required For Conclusion
 * We are modifing the file to ES6 notation and functions and etc etc...
 */

// Phrase 1 - Syllogism
// All men are mortal
// Socrates is a man.
// Therefore, socrates is mortal.

// All men are mortal
let oldman = {
    mortal: true,
};
// Socrates is a man.
oldman.name = "Sockrates";
// Checks if argument is not null and is an object and objects mortalilty
const isMortal = (anyMan) => (anyMan !== null && typeof(anyMan) === "object" && anyMan.mortal);

console.log(oldman.name + " is mortal ?\nA : " + isMortal(oldman));

// Phrase 2 - Syllogism
// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.

let birthdayCake = {
    // Function To get type of cake.
    getType: function(flavours, chocolated) {
        let type = "no flavour";
        if (chocolated)
            return type = "chocolate";
        else {
            flavours.forEach((item) => {
                if (item !== "chocolate")
                    return type = item;
            })
        }
        return type;
    }
};
// Array of Flavours
const flavours = ["vanilla", "chocolate"];
// Log type of cake
console.log("Type of cake is : " + birthdayCake.getType(flavours, false));
