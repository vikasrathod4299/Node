//recursivly
function minChakra(shinobi, s, k) {
  if (
    shinobi
      .map((element) => (element = Math.max(element - k, 0)))
      .reduce((a, b) => a + b, 0) <= s
  )
    return k;
  return minChakra(shinobi, s, k + 1);
}
console.log(minChakra([5, 10, 3, 7, 10], 1, 0));

//itratively
// let minChkra = (shinobis, s) => {
//   let k = 0;
//   while (true) {
//     if (shinobis.map((element) => element - k).reduce((a, b) => a + b, 0) <= s)
//       return k;
//     k += 1;
//   }
// };

// console.log(minChkra([5, 10, 3, 7, 10], 1));
