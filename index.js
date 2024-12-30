// Problem:
// Inputs: an integer between 1 and 2500, an array of positive and negative integers
// Output: a string associated with the final rating of a user based off of the integer

// Example: For initial = 1500 and changes = [-100, -300, 450, 500, -500, -600], the output should be solution(initial, changes) = "beginner"
// Rating can never dip below 1 or above 2500

// Data Type/ Conversion:
//integers and manipulate it as we iterate over an array. return a string

// Algorithm:
// Create a guard clause maybe using max and min?
// Array.for each to add each element in the array to our initial value
// Or for loop
// Use an if statement to determine what level the integer is equivalent to
k
// Code:

const solution = (initial, changes) => {
  let newInt = initial;
  for (let i = 0; i < changes.length; i++) {
    newInt = Math.min(2500, Math.max(1, newInt));
    newInt += changes[i];
  }
  if (newInt < 1000) {
    return "beginner";
  } else if (newInt < 1500 && newInt >= 1000) {
    return "intermediate";
  } else if (newInt >= 1500 && newInt < 2000) {
    return "advanced";
  } else {
    return "pro";
  }
};
