n = 58

if(n%2 === 0){
   var a = 'nice'
//    const y = 'something else'
    // let x = 'something'
     console.log('even');
}
else{
    console.log('odd');
}
console.log(a);
// console.log(x);
// console.log(y);


function isPerfectSquare(number) {
    if (number < 0) {
      return false;
    }

    return Number.isInteger(Math.sqrt(number));
  }

  const num1 = 1;
  const num2 = 6;
  const num3 = 9;
  
  console.log(num1 + " is perfect square: " + isPerfectSquare(num1));
  console.log(num2 + " is perfect square: " + isPerfectSquare(num2));
  console.log(num3 + " is perfect square: " + isPerfectSquare(num3));

  function findGreatest(num1, num2, num3) {
    
    let greatest = num1;

    if (num2 > greatest) {
      greatest = num2;
    }

    if (num3 > greatest) {
      greatest = num3;
    }
    return greatest;
  }
  
  const number1 = 100;
  const number2 = 150;
  const number3 = 96;
  
  const greatestNumber = findGreatest(number1, number2, number3);
  
  console.log("The greatest number is:", greatestNumber);
  
  