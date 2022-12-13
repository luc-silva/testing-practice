let reverseString = function (string) {
  let copy = string.split("")
  let arr = []
  copy.forEach(letter => {
    arr.unshift(letter)
  });
  return arr.join("")
  
};

export default reverseString;
