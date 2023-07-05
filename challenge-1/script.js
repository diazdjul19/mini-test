/**
 * This function for Reverses an array of numbers
 */
function reverseArray() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      continue;
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FooBar");
    } else if (i % 3 === 0) {
      arr.push("Foo");
    } else if (i % 5 === 0) {
      arr.push("Bar");
    } else {
      arr.push(i);
    }
  }

  const result = arr.reverse().join(" ");
  console.log(result);
  document.getElementById("showArr").innerHTML = result;
}

/**
 * Checks whether a number is prime.
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}
