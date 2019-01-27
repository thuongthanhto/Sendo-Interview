function square(n) {
  return n * n;
}

function map(array, fn) {
  return array.map(value => {
    return fn(value);
  });
}

console.log(map([4, 8], square));
