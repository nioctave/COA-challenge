function transformString(input) {
  const length = input.length;

  // function to reverse a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // function to replace each character with its ASCII code
  function asciiTransform(str) {
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // Check divisibility and apply transformations accordingly
  if (length % 15 === 0) {
    return asciiTransform(reverseString(input));
  } else if (length % 3 === 0) {
    return reverseString(input);
  } else if (length % 5 === 0) {
    return asciiTransform(input);
  } else {
    return input; // No transformation needed if no conditions are met
  }
}

// Testing the function with provided examples
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

// Additional test cases
console.log(transformString("Hello World")); // Output: Output: "Hello World" (length 11, not divisible by 3 or 5)
console.log(transformString("abcdef")); // Output: "fedcba" (length 6, divisible by 3)
console.log(transformString("Foods")); // Output: "70 111 111 100 115" (length 5, divisible by 5)
