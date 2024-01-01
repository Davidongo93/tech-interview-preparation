function FindNeedle (haystack, needle) {
  // Your code here:
  let count = 0;
  for (const i of haystack) {
    for (const j of needle) {
      if (i === j) {
        count ++
        console.log(i);
        console.log(j);
        
      }
    }
    
    
  }

}

module.exports = FindNeedle
