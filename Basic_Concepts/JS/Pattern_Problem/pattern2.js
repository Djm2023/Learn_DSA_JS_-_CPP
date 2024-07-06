// Question 1 :  PRINT THE BELOW PATTERN

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5


for(let row = 1 ; row <= 5 ;row ++){
    let line = "";
   for(let col = 1 ; col <= 5 ; col ++){
    
     line = line + col + " "
   }
   console.log(line.trim());
 }