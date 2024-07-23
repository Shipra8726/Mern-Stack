// for loop
// while loop
// do while loop

for(let i=0; i<10; i++){
    console.log(i);
}


// WAP to print all number divisible by 7 in the range of 50 to 100
for (let num = 50; num <= 100; num++) {
    if (num % 7 === 0) {
      console.log(num);
    }
  }
//   WAP to print all number divisible by5 and 7 in the range of 50 to 100
for (let num = 50; num <= 100; num++) {

    if (num % (5 * 7) === 0) {
      console.log(num);
    }
  }
//   for of loop
  console.log('------------for of loop---------');
const nums = [3,5,8,3,2,1,7,4];
for(let i of nums){
    console.log(i);
}

// while loop
console.log('------while loop-----');
let a = 10;
while(a < 20){
  console.log(a);
  a++
}
// do while loop
console.log('------do while loop-----');
let b = 10;
do{
  console.log(b);
  b++;
}while(b<10);

// WAP to check if a number is prime

const n1 =8;
let prime = true;
for(let i =2; i,n1; i++){
  if(n1%i === 0){
    console.log('not prime');
    break
  }
}
if(prime)console.log('prime');

// WAP to reverse a number
let n2 = 21657;
let reverse = 0;
while (n2>0){
  let d = n2%10;
  reverse =reverse*10 +d;
  n2 = parseInt(n2/10);
}

console.log(reverse);

//  WAP to print fibonacci series
// let [ a , b] =  [0,1] ;
console.log(a);
console.log(b);

for (let i = 0; i < 8; i++) {
  let c = a+b;
  console.log(c);
  // /a = b;
  // b = c;
  [a, b] = [b, c];
  
}











 