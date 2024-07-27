const nums = [3, 4, 1, 2, 9, 7];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);  
}

console.log('---------- for of loop---------');
for(let i of nums){
    console.log(i);
}

console.log('------for each funtion-----');
nums.forEach( function()  { console.log('function called');} );
nums.forEach( (n , a ,b,) => {console.log(n, a, b,);});

//WAP to print square of all elements in an array

