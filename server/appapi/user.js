const Router=require('koa-router')
const mongoose=require('mongoose')
let router=new Router()
router.get('/',async(ctx)=>{
	ctx.body='这里是用户'
})
router.post('/register',async(ctx)=>{
	//声明一个User实例
	const user=mongoose.model('User')
	//给User实例new一个oneUser数据
	let newuser=new user(ctx.request.body)
	//保存
	await newuser.save().then(()=>{
		ctx.body={
			code:200,
			message:'注册成功'
		}
	}).catch(error=>{
		ctx.body={
			code:500,
			message:error
		}
	})
})
module.exports=router;