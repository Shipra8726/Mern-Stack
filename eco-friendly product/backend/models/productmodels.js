const { model, Schema,  } = require('../connection');

const mySchema = new Schema({
    title : String,
    brand : { type : String },
    category:{type: String, default : 'unknown'},
    quantity : { type : String },
    price : { type : Number, require : true},
    image: String,

    createdAt : { type : Date, default: Date.now }
});

module.exports = model('products', mySchema); //product is collection name