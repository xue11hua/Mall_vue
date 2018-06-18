//连接数据库

const mongoose=require('mongoose');
const db='mongodb://localhost/smile-db';
const glob=require('glob')//引入glob
const {resolve}=require('path')



//连接数据库
exports.connect=()=>{
	//连接数据库
	mongoose.connect(db)
    let maxConnect=0;
    //异步请求
    return new Promise((resolve,reject)=>{

    	//断开连接监听事件
		mongoose.connection.on('disconnected',()=>{
			console.log('*******数据库断开')
			if(maxConnect<=3){
				maxConnect++
				mongoose.connect(db)
			}else{
				reject()
				throw new Error('数据库出错，请联系管理员')
			}
			
		})
		mongoose.connection.on('error',(err)=>{
			console.log('*******数据库出错')
			if(maxConnect<=3){
				maxConnect++
				mongoose.connect(db)
			}else{
				reject(err)
				throw new Error('数据库出错，请联系管理员')
			}
		})
		mongoose.connection.once('open',()=>{
			console.log('*******数据库打开')
			resolve()
			
		})

    })
}

//连接模型
exports.initSchemas = () =>{
	//引入schema下的所有js
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
 