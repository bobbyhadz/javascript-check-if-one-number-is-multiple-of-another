// EXAMPLE 1 - Check if One Number is Multiple of Another

const num1 = 15;
const num2 = 5;

const remainder = num1 % num2;
console.log(remainder); // 👉️ 0

if (remainder === 0) {
  // ✅ This runs
  console.log('👉️ num1 is a multiple of num2');
} else {
  console.log('⛔️ num1 is NOT a multiple of num2');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating a reusable function

// function checkIfMultiple(num1, num2) {
//   return num1 % num2 === 0;
// }

// console.log(checkIfMultiple(15, 5)); // 👉️ true
// console.log(checkIfMultiple(15, 4)); // 👉️ false
// console.log(checkIfMultiple(15, 3)); // 👉️ true

// if (checkIfMultiple(15, 5)) {
//   // ✅ This runs
//   console.log('👉️ num1 is a multiple of num2');
// } else {
//   console.log('⛔️ num1 is NOT a multiple of num2');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if a number is not a multiple of another number

// function checkIfNotMultiple(num1, num2) {
//   return num1 % num2 !== 0;
// }

// console.log(checkIfNotMultiple(15, 5)); // 👉️ false
// console.log(checkIfNotMultiple(15, 4)); // 👉️ true
// console.log(checkIfNotMultiple(15, 3)); // 👉️ false

// if (checkIfNotMultiple(15, 5)) {
//   console.log('⛔️ num1 is NOT a multiple of num2');
// } else {
//   // ✅ This runs
//   console.log('👉️ num1 is a multiple of num2');
// }
