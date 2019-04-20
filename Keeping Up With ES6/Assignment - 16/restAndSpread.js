/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: rest and spread demo.
 * Topic: Priple/Assignment - 16
 */

// So, Rest collects all the arguments and put them into a one array that we
// loop over.

function calculateAndSqaure(x, y, ...rest) {
    let total = x + y;
    if (rest.length !== 0)
        rest.reduce((total, ele) => total + ele, 0);
    return total * total;
}

console.log(calculateAndSqaure(10, 2, 3, 12, 45, 30));

// spread will take an array which we go over every element i.e. we are spreading
// the array like peanut butter.

let arr = [2, 5, 6, 6, 32, 21, 9],
    arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 10],
    newArr;
// we spread the arr as arguments into x, y, ...rest.
console.log(calculateAndSqaure(...arr));
// we spread the arr1, arr2 to combine into one
console.log((newArr = [...arr1, "You Shall Not Combine HaHAHa", ...arr2]));

/*
 * When ... is at the end of function parameters, it’s “rest parameters” and
 * gathers the rest of the list of arguments into an array.
 * When ... occurs in a function call or alike, it’s called a “spread operator”
 * and expands an array into a list.
 *
 *
 * Rest parameters are used to create functions that accept any number
 * of arguments.
 * The spread operator is used to pass an array to functions that normally
 * require a list of many arguments.
 */
