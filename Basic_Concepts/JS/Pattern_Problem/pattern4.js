// Question 3 :  PRINT THE BELOW PATTERN

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line+=col+" "
  }
  console.log(line.trim())
}
