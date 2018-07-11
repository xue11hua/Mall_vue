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
router.post('/login',async(ctx)=>{
	let loginUser=ctx.request.body
	console.log(loginUser)
	let userName=loginUser.userName
	let password=loginUser.password
	//引入user的model
	const User=mongoose.model('User')
	//user里查找
	await User.findOne({userName:userName}).exec().then(async(result)=>{
		console.log(result)
		if(result){
			let newUser=new User()
			await newUser.comparePassword(password,result.password)
			.then((isMatch)=>{
				ctx.body={code:200,message:isMatch}
			})
			.catch(error=>{
				console.log(error)
				ctx.body={code:500,message:error}
			})
		}else{
			ctx.body={code:200,message:'用户名不存在'}
		}
	}).catch(error=>{
		console.log(error)
		ctx.body={code:500,message:error}
	})
})

module.exports=router;