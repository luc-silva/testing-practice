let capitalize = function (string) {
  let copy = string.split("");
  
  if (typeof copy[0] == "string") {
    copy[0] = copy[0].toUpperCase();
  }
  copy = copy.join("");

  return copy;
};

export default capitalize;
