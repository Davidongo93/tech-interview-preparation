function FindNeedle(haystack, needle) {
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    index = i;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        index = -1;
        break;
      }
    }
    if (index !== -1) {
      return index;
    }
  }
  return index;
}
//this aproximation has a complexity of O(n*m)
module.exports = FindNeedle;
