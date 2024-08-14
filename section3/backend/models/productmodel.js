const { model, Schema,} = require('../connection');      

const mySchema = new Schema({
    title : String,
    brand : {type : String},
    model: {type: String},
    price : { type : Number},
    image : String,    CreatedAt: {type: DataTransfer,default: DataTransfer.now}
});

module.exports = model('users', mySchema);