/*
 * Title : Assignment 01
 * File Name : songs.js
 * Location : P:\Pirple\Assignment - 01\songs.js
 * Type : Pirple Assignment 01
 * Author : Malav
 * Data : 05/03/2019 (dd/mm/yyyy)
 * Description : Priniting Names of Song I Love And Progressing in My Course :)
 */

// Constructor To Make User Defined Songs.
function Song(id, name = null, singers = null, album, genre = null, movie = null, length = null, date = null) {
    this.id = id;
    this.name = name;
    this.singers = singers;
    this.album = album;
    this.genre = genre;
    this.movie = movie;
    this.length = length;
    this.date = date;
    // Function To Print Information of Song.
    this.showInfo = function() {
        if (name !== null) {
            console.log(
                "id : " + this.id + "\n",
                "name : " + this.name + "\n",
                "singers : " + this.singers.join("\n\t") + "\n",
                "genre : " + this.genre + "\n",
                "movie : " + this.movie + "\n",
                "length : " + this.length + "\n",
                "date : " + this.date + "\n"
            );
        }
    }
}

// Make Objects of Song and Add of Array mySongs.
var despactio = new Song(1, "despactio", ["luis fonsi", "daddy yanki"], "vida", "pop", null, "04:41", "12/01/2017");
var hindiSong01 = new Song(2, "apna time ayega", ["ranveer sing", "dub sharma"], "gully boy", "rap", "gully boy", "02:20", "24/01/2019");
var hindiSong02 = new Song(3, "channa merya", ["arijit singh"], "ae dil hai mushkil", null);
var shapeofyou = new Song(4, "shape of you");

// Array To Store Songs.
var mySongs = [despactio];

// Push hindiSong's.
mySongs.push(hindiSong01);
mySongs.push(hindiSong02);

// Display All The Songs.
for (var i = 0; i < mySongs.length; i++) {
    mySongs[i].showInfo();
}

// Array For English Song
var englishSongs = mySongs.slice(0, 0);
englishSongs.push(shapeofyou);
mySongs.push(shapeofyou);

// Log Why Is Luis Fonsi Famous.
console.log("Q: Why is Luis Fonsi Famous");
console.log("\t" + despactio.singers[0] + " was the Most Popular in 2017 - 2018 due to song" + despactio.name);

// Log Songs That Require Date Property set.
for (var i = 0; i < mySongs.length; i++) {
    if (mySongs[i].date == null) {
        console.log(mySongs[i].id + " : " + mySongs[i].name + " No date Plz Enter One");
    }
}
