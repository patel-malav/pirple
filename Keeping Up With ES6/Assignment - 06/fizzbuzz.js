/*
 * Title : Assignment 06
 * File Name : fizzbuzz.js
 * Location : P:\Pirple\Assignment - 06\fizzbuzz.js
 * Type : Pirple Assignment 06
 * Author : Malav
 * Data : 07/03/2019 (dd/mm/yyyy)
 * Description : fizzbuzz.
 * question : You're about to do an assignment called "Fizz Buzz",
 * which is one of the classic programming challenges.
 * It is a favourite for interviewers,
 * and a shocking number of job-applicants can't get it right.
 * But you won't be one of those people.
 * Here are the rules for the assignment (as specified by Imran Gory):
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print "Fizz" instead
 * of the number and for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

function fizzBuzz(length) {

    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0)
                return false;
        }
        return true;
    }

    for (let i = 1; i <= length; i++) {
        let output = "";
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (isPrime(i)) {
            output += "Prime";
        }
        if (output === "") {
            output = i;
        }
        console.log(output);
    }
}

fizzBuzz(100);
