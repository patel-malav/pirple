/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: Elevator Simulation - JavaScript
 * Topic: Priple/Project - 03
 */
 // A Building class need a Elevator class to add elevators.
const Elevator = require("./elevator.js");
// A Genral CLass Building where we enter details of building and method to
// Initialize Building.
class Building {
    // constructor for building class with args as Object building settings.
    constructor(config) {
        this.basement = config.basement;
        this.lobby = config.lobby;
        this.floors = config.floors;
        this.penthouse = config.penthouse;

        this.name = null;
        this.elevators = [];
    }
    // setter to set name of building.
    set setName(name) {
        this.name = name;
    }
    // getter for name of building.
    get getName() {
        return this.name;
    }
    // getter to get building elevators.
    get getElevators() {
        return this.elevators;
    }
    // add elevators and Args as a Object with Elevator setting for the building.
    // we can pass array or single values for the settings and get a result Array
    // that names every floor and puts in to floors array which will be used by
    // Elevator class to use.
    addElevators(config) {
        let floors = [], lobbyOffset;
        if(config.basement) {
            if(Array.isArray(this.basement)) {
                for(let i = this.basement[0]; i < this.basement[1]; i++) {
                    floors.push(`Basement ${-i}`);
                }
                lobbyOffset = -this.basement[1];
            }
            else {
                for(let i = this.basement; i < 0; i++) {
                    floors.push(`Basement ${-i}`);
                }
                lobbyOffset = -this.basement;
            }
        }
        for(let i = 1; i <= this.floors; i++) {
            floors.push(`Floor ${i}`)
        }
        if(Array.isArray(this.lobby)) {
            this.lobby.forEach((ele, idx) => {
                floors.splice(ele + lobbyOffset, 0, `Lobby ${idx}`);
            });
        }
        else {
            floors.splice(lobbyOffset, 0, `Lobby ${this.lobby}`);
        }
        if(config.penthouse) {
            floors.push(`Penthouse ${this.penthouse}`);
        }
        // make new elevator and push in to elevators array.
        this.elevators.push(new Elevator(this, config.id, floors))
    }
    // checks if elevator exists and starts or log err.
    startElevator(id) {
        if(id < this.elevators.length)
            this.elevators[id].start();
        else
            console.log("Elevator Does Not Exists");
    }
    // checks if elevator exists and stops or error
    stopElevator(id) {
        if(id < this.elevators.length)
            this.elevators[id].stop();
        else
            console.log("Elevator Does Not Exists");
    }
    // a button pressed method for the building buttons which are mounted outside.
    buttonPressed(floor, dir) {
        let best =  Elevator.bestElevator(this.elevators, floor, dir);
        best.addFloorToQueue = floor;
    }
}
// export the package 
module.exports = Building;
