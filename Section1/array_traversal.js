const nums = [3, 4, 1, 2, 9, 7];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);  
}

console.log('---------- for of loop---------');
for(let i of nums){
    console.log(i);
}