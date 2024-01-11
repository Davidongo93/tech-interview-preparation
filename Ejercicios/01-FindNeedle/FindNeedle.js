function FindNeedle (haystack, needle) {
  let index = 0;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i]===needle[j]) {
        if (haystack[i+1]===needle[j+1]) {
          
        index ++;
        } else {
          index = -1;
          break;
        }
      } else {
        continue;
      }
    };
    
  }
  return index;

}

module.exports = FindNeedle