\#HOW TO USE API For Lift Control.

\##Write Configuration in config.json File

**Example**

    {
        "hayaat": { &lt;-- "Name of the Building"
            "basement": -1, &lt;-- No of Basement
            "count": 2, &lt;-- No of Elevators
            "floors": 9, &lt;-- No of Floors
            "lobby": 0, &lt;-- Lobby Floor No.
            "penthouse": 10, &lt;-- Penthouse No.
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
