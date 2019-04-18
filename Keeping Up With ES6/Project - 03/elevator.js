/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: Elevator Simulation - JavaScript
 * Topic: Priple/Project - 03
 */

// A function that add delay with amount of milliseconds provided. local func.
function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

// Class Elevator to make an elevator and instantize its methods.
class Elevator {
    // constructor with arguments like building, id, floors -> floors is an Array
    // building an object which the elevator belongs to and a id -> for name.
    constructor(building, id, floors) {
        this.building = building;
        this.id = id;
        this.floors = floors;

        this.curFloor = 0;
        this.curDir = null;
        this.travelQueue = [];
        this.travelDelay = 1000;
        this.doorDelay = 200;
        this.canMove = true;
        this.fan = false;
    }
    // setter method to add floors to travel queue.
    set addFloorToQueue(floor) {
        this.travelQueue.push(floor);
    }
    // start elevator and start timer a timer just checks for an update in
    // travel queue.
    start() {
        console.log(`Elevator : ${this.id} Started.`);
        this.timer = setInterval(this.move, 1000, this);
    }
    // stops the timer that checks for update.
    stop() {
        console.log(`Elevator : ${this.id} Stopped.`);
        clearInterval(this.timer);
    }
    // Open Door has time dealy.
    doorOpen() {
        this.canMove = false;
        wait(this.doorDelay);
        console.log(`Elevator : ${this.id} Door Opened.`);
        this.canMove = true;
    }
    // Close Door has time delay.
    doorClose() {
        this.canMove = false;
        wait(this.doorDelay);
        console.log(`Elevator : ${this.id} Door Closed.`);
        this.canMove = true;
    }
    // a method that is started by timer it checks if there is entry in
    // travel queue and take appropiriate action to move and add delay.
    move(elevator) {
        if (elevator.travelQueue.length !== 0 && elevator.canMove) {
            elevator.doorClose();
            if (elevator.canMove) {
                elevator.canMove = false;
                console.log(`Elevator : ${elevator.id} Moving From ${elevator.floors[elevator.curFloor]}`);
                elevator.curDir = elevator.travelQueue[0] < elevator.curFloor ? "dwn" : "up";
                wait(elevator.travelDelay);
                elevator.curFloor = elevator.travelQueue.shift();
                console.log(`Elevator : ${elevator.id} Moved To ${elevator.floors[elevator.curFloor]}`);
                elevator.canMove = true;
            }
            elevator.doorOpen()
        }
    }
    // a button press handler inside the elevator.
    buttonPressed(type) {
        switch (type) {
            case "stop":
                this.stop();
                break;
            case "alarm":
                this.stop();
                console.log("Ta nu nu nu Ta nu Ta nu Ta nu Ta nu");
                break;
            case "fan":
                if (this.fan) {
                    this.fan = false;
                    console.log("Fan On");
                } else {
                    this.fan = true;
                    console.log("Fan Off");
                }
                break;
            case "openDoor":
                this.doorOpen();
                break;
            case "closeDoor":
                this.doorClose();
                break;
            default:
                this.addFloorToQueue = type;
        }
    }
    // a method that gets the best elevator possible with shortest time. - STATIC
    static bestElevator(elevators, floor, dir) {
        let totalTime = [];
        elevators.forEach((ele, idx) => {
            if (ele.curDir === dir || ele.curDir === null) {
                let time = (ele.curFloor - floor) * ele.travelDelay * (2 * ele.doorDelay);
                time = time < 0 ? -time : time;
                totalTime.push(time);
            } else {
                totalTime.push(999999);
            }
        });
        let elevatorNo = totalTime.reduce((min, x, i, arr) => x < arr[min] ? i : min, 0);

        // Hard Coded To Check if Elevator Can go to penthouse or basement.
        if(elevatorNo === 0) {
            if(floor === 10)
                elevatorNo = 1;
        } else {
            if(floor === 0)
                elevatorNo = 0;
        }

        return elevators[elevatorNo];
    }
}
// export the class Elevator.
module.exports = Elevator;
