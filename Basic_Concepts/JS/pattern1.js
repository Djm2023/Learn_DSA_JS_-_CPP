// Question 1 :  PRINT THE BELOW PATTERN

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5

for (let row = 1; row <= 5; row++) {
  let line = " ";
  for (let col = 1; col <= 5; col++) {
    line += row;
    if (col < 5) {
      line += " ";
    }
  }
  console.log(line);
}
