const { model, Schema,} = require('../connection');      

const mySchema = new Schema({
    name : String,
    email : {type : String, unique: true},
    password: {type: String, require: true},
    city:{ type: String, default: 'unknown'},
    //city:{type:String, city: delhi},
    createdAt : { type : Date, default:Date.now},
});

module.exports = model('users', mySchema); //USERS IS COLLECTION NAME