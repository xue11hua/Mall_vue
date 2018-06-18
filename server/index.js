const koa=require('koa');
const app=new koa();
const {connect , initSchemas}=require('./database/init.js');
const mongoose=require('mongoose');
const Router=require('koa-router')//路由
const bodyParser=require('koa-bodyparser')//接受传来的参数
const cors=require('koa2-cors')//设置跨域

app.use(bodyParser())
app.use(cors())
//路由模块
let user=require('./appapi/user.js')//用户
let home=require('./appapi/home.js')//首页

//装载所有子路由
let router=new Router()

router.use('/user',user.routes())
router.use('/home',home.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;(async () =>{
	//连接数据库
    await connect()
    //引入模型
    initSchemas()
   
})()
// app.use(async(ctx)=>{
// 	ctx.body="<h1>1111</h1>"
// })
app.listen(3000,()=>{
	console.log('3000')
})