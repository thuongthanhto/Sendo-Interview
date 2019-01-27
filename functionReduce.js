function reduce(array, fn, sum) {
  return array.reduce(fn, sum);
}

var a = reduce(
  [1, 2],
  function(sum, n) {
    return sum + n;
  },
  0
);

console.log(a);
