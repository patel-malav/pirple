/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: Elevator Simulation - JavaScript
 * Topic: Priple/Project - 03
 */

// Import File System from Node and Building class from directory.
const fs = require("fs");
const Building = require("./building.js");

// we import config.json and parse the string

let settings = JSON.parse(fs.readFileSync("./config.json", "utf8"));

//  we are making a new Building called hayaat.
let hayaat = new Building(settings.hayaat);

// Building has setter method called setName.
hayaat.setName = "hayaat";

// we add Elevators for the building.
for (let i = 0; i < settings.hayaat.count; i++) {
    hayaat.addElevators(settings.hayaat.elevatorSettings[i]);
}
// a getElevators getter method to get elevators. we use elevators to use method
// called buttonPressed to run commmands related to buttons inside a elevator
let elevators = hayaat.getElevators;

// Start Elevators.
for (let i = 0; i < settings.hayaat.count; i++) {
    hayaat.startElevator(i);
}

// Get Traffic.
setInterval(() => {
    hayaat.buttonPressed(Math.floor(Math.random() * 11), Math.random() < 0.5 ? "up" : "dwn");
}, 800);

// To simulate buttons pressed inside a lift
elevators[1].buttonPressed(6);
elevators[0].buttonPressed(3);

// Stop Elevators After Traffic
// Emergency Stop ?
setTimeout(() => {
    elevators[0].buttonPressed("stop");
    elevators[1].buttonPressed("alarm");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAaaaaa\nAAAAAAAAAAAA\nAAAAAAAA");
}, 20000);
