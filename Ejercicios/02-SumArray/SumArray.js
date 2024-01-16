function SumArray (arr, n) {

  for (const i of arr) {
    for (let j = 1; j < arr.length; j++) {
      
    if (i+arr[j]===n) {
      return true;
    }
      
    }
    
  }
return false;
};

/* Is possible to reduce the algorythm complexity to O(m)
with an only iteration:

function SumArray(arr, n) {
  const seenNumbers = new Set();

  for (const num of arr) {
    const complement = n - num;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}
*/

module.exports = SumArray
