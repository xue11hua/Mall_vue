const basurl="https://www.easy-mock.com/mock/5ae5293bb188f2152c952d77/smilevue/"
const localurl='http://localhost:3000/'
const url={
	getshopingmallinfo:basurl+'index',//首页
	getgoodsinfo:basurl+'getgoodsinfo',
	registerUser:localurl+'user/register',//注册接口
}
module.exports=url