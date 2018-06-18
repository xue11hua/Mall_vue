const Router=require('koa-router')
let router=new Router()
router.get('/',async(ctx)=>{
	ctx.body='这里是首页index'
})
module.exports=router;