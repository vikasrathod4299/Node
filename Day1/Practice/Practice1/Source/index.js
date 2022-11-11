let ef = [10, 10, 10, 10, 20, 20];
let bf = [10, 11, 62, 15, 7, 50];

let maxbf = 0;

for (let i = 0; i < ef.length; i++) {
  for (let j = i; j < ef.length; j++) {
    if (ef[i] + ef[j] <= 20 && bf[i] + bf[j] > maxbf) {
      maxbf = bf[i] + bf[j];
    }
  }
}

console.log(maxbf);
