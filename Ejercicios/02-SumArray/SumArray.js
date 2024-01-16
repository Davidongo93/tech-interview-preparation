function SumArray (arr, n) {

  for (const i of arr) {
    for (let j = 1; j < arr.length; j++) {
      
    if (i+arr[j]===n) {
      return true;
    }
      
    }
    
  }
return false;
}

module.exports = SumArray
