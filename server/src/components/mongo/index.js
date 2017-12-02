//mongoose

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/csj',{
    useMongoClient: true
});

//schema

const accountSchema = mongoose.Schema({
    openid:String,
    tel:String,
    psw:String,
    order:Array
})

const shopSchema = mongoose.Schema({
    openid:String,
    info:[{name:String}],
    banner:Array,
    recommend:Array,
    groupPurchase:Array,
    items:Array
})


const Account = mongoose.model('account', accountSchema)
const Shop = mongoose.model('shop', shopSchema)

module.exports={
    Account,
    Shop
}
