// Question 3 :  PRINT THE BELOW PATTERN

// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

let count = 1;
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= 5; col++) {
    line += count + " ";
    count++;
  }
  console.log(line.trim());
}
