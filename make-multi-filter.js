function MakeMultiFilter(originalArray) {
  // Initialize currentArray to be identical to originalArray
  var currentArray = originalArray.slice();

  // Define the arrayFilterer function
  function arrayFilterer(filterCriteria, callback) {
    // Check if filterCriteria is a function
    if (typeof filterCriteria === 'function') {
      // Filter currentArray based on filterCriteria
      currentArray = currentArray.filter(filterCriteria);
    }

    // Check if callback is a function and call it with currentArray as an argument
    if (typeof callback === 'function') {
      callback.call(originalArray, currentArray);
    }

    // Return the arrayFilterer function to allow chaining
    return arrayFilterer;
  }

  // Return the arrayFilterer function
  return arrayFilterer;
}

// Example usage:
var originalArray = [1, 2, 3];
var arrayFilterer1 = MakeMultiFilter(originalArray);

arrayFilterer1(function (elem) {
  return elem !== 2; // filter out elements not equal to 2
}, function (currentArray) {
  console.log(this); // originalArray
  console.log(currentArray); // [1, 3]
});

arrayFilterer1(function (elem) {
  return elem !== 3; // filter out elements not equal to 3
});

var filteredArray = arrayFilterer1(); // Get the filtered array
console.log(filteredArray); // [1]
