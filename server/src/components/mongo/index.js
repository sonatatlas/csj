//mongoose

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/csj',{
    useMongoClient: true
});

//schema

const accountSchema = mongoose.Schema({
    openid:String,//wechat id
    tel:Number,
    psw:String,
    business: Boolean,
})

const shopSchema = mongoose.Schema({
    info : {
	name : String,
	logo : String,
	label : Array,
	discount : String,
	intro : String,
	address : String,	
    },
    owner : {
	account : String,
	password : String,
	subAccount : Array
    },
    items : Array,    
    categories : [],
})


const Account = mongoose.model('account', accountSchema)
const Shop = mongoose.model('shop', shopSchema)

module.exports={
    Account,
    Shop
}
