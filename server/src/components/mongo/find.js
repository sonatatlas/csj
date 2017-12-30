

const Shop = require('./index.js').Shop


//http://localhost:6262/c/shops/reed/1.JPG

Shop.findOne({
    "owner.account": '15555603375'
},( err, docs)=>{
    console.log(err)
    console.log(res)
})

console.log('ok')
