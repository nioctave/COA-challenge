function hasSubarrayWithSum(arr, target) {
  let currentSum = 0; // This will store the sum of the current window
  let start = 0; // Start pointer for the window

  // Loop through the array with 'end' pointer
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Add the current element to the window sum

    // Adjust the window size to ensure the sum is correct
    while (currentSum !== target && start <= end) {
      if (currentSum > target) {
        currentSum -= arr[start]; // Remove the element at the 'start' pointer from the window sum
        start++; // Move the start pointer to the right
      } else if (currentSum < target) {
        break; // If currentSum is less than target, break to add more elements
      }
    }

    // Check if the current window sum equals the target
    if (currentSum === target) {
      return true; // Return true if we found the target sum
    }
  }

  // If we finish the loop without finding the target sum, return false
  return false;
}

// Testing the function with the example provided
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

// Additional test cases to verify correctness
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Output: true (subarray [2, 3, 4])
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 15)); // Output: true (subarray [1, 2, 3, 4, 5])
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 16)); // Output: false (no such subarray)
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 10)); // Output: true (subarray [-1, -2, -3, -4])

