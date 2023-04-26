/*
Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built 
with the sides of given length and false in any other case.
*/


// Solution

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && c + b > a;
}

// or

let isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2