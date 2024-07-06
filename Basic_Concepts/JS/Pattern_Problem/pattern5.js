// Question 5 :  PRINT THE BELOW PATTERN

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let col = 5; col >= row; col--) {
    line += col + " ";
  }
  console.log(line.trim());
}
