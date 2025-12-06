const { default: mongoose } = require("mongoose");


const orderSchema = new mongoose.Schema({

    items:Array,
    total:Number,
    discount:Number,
    finalAmount:Number,
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('orders',orderSchema);