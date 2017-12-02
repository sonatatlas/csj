
//
const URL = 'http://localhost:3000/'
const Shop = require('./index.js').Shop


let shop = new Shop({
    openid: 'foo',
    banner:[
	URL + 'shops/csj/banner/banner1.jpg',
	URL + 'shops/csj/banner/banner2.jpg'
    ],categories:[
	URL + 'shops/csj/categories/snacks.jpg',
	URL + 'shops/csj/categories/cothing.jpg',
	URL + 'shops/csj/categories/shoes.jpg',	
    ],groupPurchase:[
	URL + 'shops/csj/categories/snacks.jpg',
	URL + 'shops/csj/categories/cothing.jpg',
	URL + 'shops/csj/categories/shoes.jpg'	
    ],items:[
	URL + 'shops/csj/items/item1.jpg',
	URL + 'shops/csj/items/item2.jpg',
	URL + 'shops/csj/items/item3.jpg'	
    ]
}).save((err)=>{
    if(err){
	console.log('out of err')
    }
})

