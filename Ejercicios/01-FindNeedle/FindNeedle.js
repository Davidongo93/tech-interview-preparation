function FindNeedle (haystack, needle) {
  // Your code here:
  let count = 0;
  for (const i of haystack) {
    for (const j of needle) {
      if (i === j) {
        count ++
        console.log(i);
        console.log(j);
       } else {
          count = -1;
        }
        console.log(count);
      }
    }
    return count;
    
  };

module.exports = FindNeedle
