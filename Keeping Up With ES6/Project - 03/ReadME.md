\#HOW TO USE API For Lift Control.

\##Write Configuration in config.json File

**Example**

    {
        "hayaat": { <-- "Name of the Building"
            "basement": -1, <-- No of Basement
            "count": 2, <-- No of Elevators
            "floors": 9, <-- No of Floors
            "lobby": 0, <-- Lobby Floor No.
            "penthouse": 10, <-- Penthouse No.
            "elevatorSettings": [{ <-- Array for settings of Elevator.
                "id": "A", <-- An Object that defines settings for individual settings.
                "basement": true, <-- Indicates that  lift can go to basement.
                "penthouse": false <-- Indicates that lift can not go to penthouse.
            }, {
                "id": "B",
                "basement": false, <-- Same as above here but opposite.
                "penthouse": true <-- "" "" "" "" "" "" "" "" "" "" ""
            }]
        }
    }

**Add a Building**
    let hayaat = new Building(settings.hayaat);

**Set Name of the building**
    hayaat.setName = "hayaat";

**This Adds The Elevators to a building**
    for (let i = 0; i < settings.hayaat.count; i++) {
        hayaat.addElevators(settings.hayaat.elevatorSettings[i]);
    }

**Interface to add outside button for elevator**
    hayaat.buttonPressed("Interger Value of Floor no", "Direction is up/dwn");

**Get Building Elevators**
    let elevators = hayaat.getElevators;

**Interface to simulate button pressed inside Elevator**
    elevator["elevator number"].buttonPressed("floor number / button type = stop/alarm/open door/close door")
