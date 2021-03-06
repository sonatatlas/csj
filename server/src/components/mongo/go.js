

const Shop = require('./index.js').Shop


//http://192.168.31.102:6262/c/shops/reed/1.JPG

var shop = new Shop({
    info : {
        name : "Reed",
        logo : 'http://192.168.31.102:6262/c/shops/reed/1.JPG',
        label : ['地下丝绒', '迷幻摇滚', '英国', '垮掉一代'],
        discount : "全场97折",
        intro : "14岁时就录制了他的第1张唱片。1965年与键盘手约翰-凯尔组成地下丝绒乐队。1972年，发布了首张个人同名专辑，首张现场专辑《摇滚乐动物》于1974年3月推出。娄-里德在个人发展生涯中出了许多专辑，其中1972年与大卫-鲍伊一起制作的《变压器》中产生了娄-里德到目前为止唯一的一首打入排行榜前20名的热门金曲《沿着荒凉之地行走》。",
        address : "美国纽约布鲁克林",
    },
    items : [{
        name : "Sweet",
        sale : "98",
        intro : "我是sweet jane 的intro",
        likes : 72,
        price : 61,
	stock : 9,
        discount : 10,
        pics : "http://192.168.31.102:6262/c/shops/reed/2.JPG",
        label : ["标签1","标签2"],
        activities : ["活动1","活动2"]
    },{
        name : "Jane",
        sale : "92",
        intro : "我是sweet jane 的intro",
        likes : 59,
        price : 68,
	stock : 2,
        discount : 10,
        pics : "http://192.168.31.102:6262/c/shops/reed/3.JPG",
        label : ["标签1","标签2"],
        activities : ["活动1","活动2"]
    }],
    owner : {
        account : "15555603375",
        password : "181058",
        subAccount : Array
    },
    categories : [
	{label:"热销",subCategories:[
	    {label:"热销子分类1"},{label:"热销子分类2"}
	]},
	{label:"打折", subCategories:[
	    {label:"打折子分类1"},{label:"打折子分类2"}
	]}
    ],
}).save()
