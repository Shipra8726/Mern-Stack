function addNums (a , b){
 c =a+b;
console.log(c);
}

addNums(3,5);

// console.log(c);

const getAvg = function(m1 , m2 , m3){
   const avg = (m1+m2+m3)/3;

//    console.log(avg);
return avg;
}
getAvg(78,89,90);

let result = getAvg(78, 89, 90);
console.log(result);

const factorial = (n) => {
let f = 1;

for(let i = 1; i <= n; i++){
    f = f* i;
}
return f;
}
let ans = factorial(6);
console.log(ans);

// WAP to find sum of all numbers in a given range 
function sumOfRange(start, end) {
    // Validate input (optional)
    if (start > end) {
      throw new Error("Start number must be less than or equal to end number.");
    }
  
    // Calculate the sum using the arithmetic series formula
    const n = end - start + 1; // Number of elements in the range
    const sum = (n * (start + end)) / 2;
  
    return sum;
  }
  
  // Example usage
  const rangeSum = sumOfRange(10, 20);
  console.log(rangeSum); // Output: 155


  // WAP all prime number in range
  
  