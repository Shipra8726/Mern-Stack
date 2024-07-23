const arr1 = ['hello', 34567, false, null];

console.log(arr1);

console.log(typeof arr1);
console.log(Array.isArray(arr1));

const movies = ['Dangal', 'kill','Manji', 'DDLJ', 'Jawan', 'PK' ];
9
console.log(movies.length); //also work with strings
// indexing

console.log(movies[3]);//also works with strings
console.log(movies.at(-2)); //also work with strings
 console.log(movies.at(-2));

movies[3 ]= 'krish'
console.log(movies);
console.log(movies.indexOf('kill'));// also work with string

//slicing
console.log(movies);
console.log(movies.slice(2, 5));
console.log(movies.slice(2, -3));
console.log(movies.slice);
console.log(movies.slice(2, 60));

//adding and removing elements
movies.push('kalki');// adds elements at end of an arrays
console.log(movies);

movies.unshift('KGF');//add elements at start of an arrays
console.log(movies);

movies.pop();// removes elements from end of array
movies.shift();// removes elements from start of arrays

console.log(movies);

// movies.splice(3, 2); //removes 2 elements starting from index 3
// movies.splice(3, 2, 'deadpool', 'venom'); // replacing elements
movies.splice(3, 0, 'deadpool', 'venom');
console.log(movies);


