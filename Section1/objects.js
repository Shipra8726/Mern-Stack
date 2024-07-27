const user ={
    name : 'shipra',
    email : 'shiprasinghmau8@gmail.com',
    password : 'abc123'

}
console.log(user.email);
console.log(user['name']);
console.log(user['password']);

user.email = 'riya21gmail.com'
console.log(user);

user.address ='hazratganj'
console.log(user);

console.log(Object.keys(user));// saare objects find krte hai
console.log(Object.values(user));
console.log(Object.entries(user));


const brand = 'sumsung';
const model = 's24 galaxy';
const price ='104000';
const colors = ['red','black','grey'];

const smartphones ={ brand,model,price,colors};
console.log(smartphones);

const {address} = user;
console.log(address);

console.log(smartphones.price );
console.log(smartphones.colors[1]);

smartphones.colors.push('grey')
console.log(smartphones);

smartphones.colors[2]= 'moonlight'
console.log(smartphones.colors);

const smartphonesList = [
    {
    brand : 'sumsung',
    model : 's24 galaxy',
    price :'104000',
    colors : ['red','black','grey']
    },
    {
        brand : 'apple',
        model : 'iphone15',
        price :'1250000',
        colors : ['black','grey']
        },
        {
            brand : 'vivo',
            model : 'y22s',
            price :'50000',
            colors : ['silver','green','red']
            },
            {
                brand : 'motorola',
                model : 'G8',
                price :'100000',
                colors : ['blue','green',]
                },
                {
                    brand : 'google',
                    model : 'pixel 8',
                    price :'34000',
                    colors : ['green','silver','white']
                    },
                    {
                        brand : 'sumsung',
                        model : 's24 galaxy',
                        price :'104000',
                        colors : ['red','black','grey']
                        }

];
// access the price of apple iphone
//access the last colors of google pixels
console.log(smartphonesList[1].price);
console.log(smartphonesList[4].colors.at(-1));
console.log(smartphonesList[4].colors[smartphonesList[3].colors.length-2]);

const myphones = smartphonesList.filter((phone)=> {return phone.price<= 50000})
console.log(myphones);
//filter all sumsung phones
//const mysums = smartphonesList.filter((sums)=> {return sums.brand.toLowerCase === query toLowerCase})
 //const mysums = smartphonesList.filter((sums)=> {return sums.brand.toLowerCase().includes(query.toLowerCase()))};
 //console.log(mysums);

 //filter all phone with white colors
 const whtcolors = smartphonesList.filter((colors)=>{return colors colors.includes('white')})
 console.log(whtcolors);