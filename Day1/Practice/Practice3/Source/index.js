let array = [1, 2, 1, 4, 5, 6, 2, 1, 8, 2];
let mmm = (array) => {
  //Mean
  let mean = array.reduce((a, b) => a + b, 0) / array.length;

  //Median
  array.sort();
  let median =
    array.length % 2 == 0
      ? (array[array.length / 2] + array[array.length / 2 - 1]) / 2
      : array[array.length / 2];

  //Mode
let object = {};
array.forEach((i) => (object[i] ? (object[i] += 1) : (object[i] = 1)));
let mode = array.find((key) => object[key] === Math.max(...Object.values(object)));
  return { Mean: mean, Median: median, Mode: parseInt(mode) };
};


const {Mean,Median, Mode} = mmm(array)
console.table(mmm(array))