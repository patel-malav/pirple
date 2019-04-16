/*
 * Title : Assignment 04
 * File Name : modified-syllogism.js
 * Location : P:\Pirple\Assignment - 04\modified-syllogism.js
 * Type : Pirple Assignment 04
 * Author : Malav
 * Data : 05/03/2019 (dd/mm/yyyy)
 * Description : Switch Case Demo.
 */

// No Hoisted Functions

// all valid label's
const labels = ["second", "seconds", "minute", "minutes", "hour", "hours", "day", "days"];

// checks if inputs are valid
const validateInputs = function(num1, num2, lab1, lab2) {
    console.log();
    return num1 > -1 && num2 > -1 && typeof lab1 === "string" && typeof lab2 === "string" &&
        labels.indexOf(lab1.toLowerCase()) > 1 && labels.indexOf(lab2.toLowerCase()) > -1;
}

//  convert all to seconds
const convertToSeconds = function(val, label) {
    label = label.toLowerCase();

    switch (label) {
        case "second":
        case "seconds":
            return val;
        case "minute":
        case "minutes":
            return val * 60;
        case "hour":
        case "hours":
            return val * 60 * 60;
        case "day":
        case "days":
            return val * 60 * 60 * 24;
        default:
            return 0;
    }
}

const timeAdder = function(value1, label1, value2, label2) {
    if (validateInputs(value1, value2, label1, label2)) {
        const output = [];
        let t1 = convertToSeconds(value1, label1);
        let t2 = convertToSeconds(value2, label2);

        if (t1 && t2)
            totaltime = t1 + t2;

        //convert total time format
        if (totaltime === 86400) {
            output.push(1, "day");
        } else if (totaltime % 86400 === 0 && totaltime > 86400) {
            const days = totaltime / 86400;
            output.push(days, "days");
        } else if (totaltime === 3600) {
            output.push(1, "hour");
        } else if (totaltime % 3600 === 0 && totaltime > 3600) {
            const hours = totaltime / 3600;
            output.push(hours, "hours");
        } else if (totaltime === 60) {
            output.push(1, "minute");
        } else if (totaltime % 60 === 0 && totaltime > 60) {
            const minutes = totaltime / 60;
            output.push(minutes, "minutes");
        } else if (totaltime === 1) {
            output.push(1, "second");
        } else {
            output.push(totaltime, "seconds");
        }
        return output;
    } else
        return false;
}

console.log(timeAdder(1, "hour", 1, "minutes"));
console.log(timeAdder(5, "hours", 15, "minute"));
console.log(timeAdder(0, "minute", 5, "minutes"));
console.log(timeAdder(25, "hours", 3, "days"));
console.log(timeAdder(1, "minute", 240, "seconds"));
console.log(timeAdder(5, "days", 25, "hours"));
console.log(timeAdder(1, "minute", 240, "seconds"));
console.log(timeAdder(20, "hours", 4, "hours"));
console.log(timeAdder(20, "hours", 5, "hours"));

console.log(timeAdder(5, "hour", 5, "minutes"));
console.log(timeAdder(false, false, 5, "minutes"));
console.log(timeAdder({}, "days", 5, "minutes"));
