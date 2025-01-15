function myFunction(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return myFunction(Math.min(a, b), Math.abs(a - b));
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(12, 4)); // Output: 4
console.log(myFunction(0, 5)); // Output: 5
console.log(myFunction(5,0)); // Output: 5