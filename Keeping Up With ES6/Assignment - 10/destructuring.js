/*
 * Title : Assignment - 10
 * File Name : index.html
 * Location : P:\Pirple\Keeping Up With ES6\Assignment - 10\destructuring.js
 * Type : Pirple Assignment
 * Author : Malav
 * Data : 16/04/2019 (dd/mm/yyyy)
 * Description :
 */

/* Destructure an Object
 * We destructure an object when we know about the keys present in the object
 * and we have an object to destructure, we can not destructure array using
 * object destructuring syntax or any other data type.
 */

// Example of Destructuring an Object.
function Person(name, age, gender, dob, nationality = "unkowns") {
    this.name = name;
    this.age = age;
    this.gendet = gender;
    this.dob = dob;
    this.nationality = nationality;
}

let sam = new Person("sam", 25, "male", new Date(1996, 2, 20), "us");
let priya = new Person("priya", 24, "female", new Date(1997, 1, 12), "indian");

console.log(`\n\nExample of Object Destructuring.\n\n`);

if(priya instanceof Person && sam instanceof Person) {
    let {name: father, age: fatherAge, dob: fatherDOB, nationality: fatherNationality} = sam;
    let {name: mother, age: motherAge, dob: motherDOB, nationality: motherNationality} = priya;
    let aisha = new Person("aisha", 0, "female", new Date(), fatherNationality);
    console.log(`${aisha.name} is daughter of ${father} & ${mother}
    She was born on ${aisha.dob} age: ${aisha.age}
    ${father} age is : ${fatherAge} and DOB: ${fatherDOB} is ${fatherNationality} citizen,
    ${mother} age is : ${motherAge} and DOB: ${motherDOB} is ${motherNationality} citizen,
    There For By Law ${aisha.name} is a ${fatherNationality} citizen.`);
}

/* Destructure an Array
 * We destructure an Array when we know about return type and have the variables
 * to assign values to the array. Key Difference between destructuring Object
 * & Array is Array does not need to know the keys present in the array as array
 * does not have any key but it total values present in the array or position of those values.
 */

// Example of Destructuring an array.

console.log(`\n\nExample of Array Destructuring.\n\n`);

let foods = ["apple", "pizza", "burger", "sandwich", "donut", "vadapav"];

let [fruit, , , , , indianSnack] = foods;

console.log(`Destructured Food array to get the values of Fruit : ${fruit} and Indian Snack : ${indianSnack}.`);


// Complex Object Destructuring Extra Credit Work.

let hitlist = {
    authour: "Wade W. Willson",
    date: new Date(2017, 4, 22),
    targets: ["Iron Man", "Mr. Fantastic", "Hulk", "Ryan Renolds", "Other Deadpool", "Captain America", "Cable", "Magneto", "Dr. Doom"],
    finished: ["Cyclops", "Night Crawler", "Thor", "Dr. Manhattan", "Franklin Richards", "Dormamu", "Shazam"],
    friendly: {
        marvel: {
            allies: ["Spiderman", "Thanos", "Skrull Empire", "Cree Empire"],
            payment: 7500000000,
            currency: "us dollor",
            clients: ["Hydra"],
            pending: ["Hydra Empire"],
        },
        dc: {
            allies: ["Flash", "Wonder Woman", "Poison Ivy"],
            payment: 10000000,
            currency: "bit coin",
            clients: ["Lex Luthor"],
            pending: [],
        },
        got: {
            allies: ["Cersei Lannister", "Night King"],
            payment: 50000000,
            currency: "gold coins",
            clients: ["Night King"],
            pending: ["Drogon", "Rheagal", "Cleagane Brothers", "Arya Stark"]
        }
    }
}

let {authour, date, targets:[first, second, , , fifth], friendly: { dc: { payment, currency, clients: [mainClient], pending: [target]}}} = hitlist;

console.log(`\n\nExample of Complex Destructuring.\n\n`);

 console.log(`The author of the hit list is : ${authour}
    Written at ${date}
    First Target : ${first}
    Second Target : ${second}
    Fifth Target : ${fifth}
    The Main Target after Terminating Above Targets is as : ${mainClient} paid ${payment} ${currency.toUpperCase()} to Kill ${target}
    `);
