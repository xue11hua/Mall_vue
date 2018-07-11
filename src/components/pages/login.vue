<template>
	<div>
		<van-nav-bar
  title="用户登录"
  left-text="返回"
 
  left-arrow
  @click-left="onClickLeft"
  
/>
  <van-field
    v-model="username"
    label="用户名"
    icon="clear"
    placeholder="请输入用户名"
    required
    @click-icon="username = ''"
    :error-message='usernameerrormsg'
  />
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    @click-icon="password = ''"
    required
    :error-message='passworderroemsg'
  />

<van-button type="primary" bottom-action @click='registeraction' :loading='openloading'>登录</van-button>
	</div>
</template>
<script>
import axios from 'axios'
import {Toast} from 'vant'
import url from '@/seversconfig.js'
	export default {
		name:'zhuce',
		data(){
			return{
				username:'',
				password:'',
				openloading:false,//是否开启用户注册loading状态
				usernameerrormsg:'',//用户名出错
				passworderroemsg:'',//密码出错
			}
		},
		created(){
			if(localStorage.userinfo){
				Toast('您已经登录')
				this.$router.push('/')
			}
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1)
		    },
		    //提交
		    login(){
		    	this.openloading=true;
		    	 axios({
			  		//url:url.registerUser,
			  		url:url.login,
			  		method:'post',
			  		data:{
			  			userName:this.username,
			  			password:this.password
			  		}
			  	})
			  	.then(response=>{

			  		console.log(response);
			  		if(response.data.code==200 && response.data.message){
			  			new Promise((resolve,reject)=>{
				  			localStorage.userinfo={userName:this.username}
				  			setTimeout(()=>{resolve()},500)
				  		}).then(()=>{
				  			Toast('登录成功')
				  			this.$router.push('/')
				  		}).catch(err=>{
				  			Toast('登录状态保存失败')
				  		})
			  			
			  		}else{
			  			Toast('登录失败')
			  			this.openloading=false;
			  		}
			  		
			  	})
			  	.catch(error=>{
			  		Toast('登录失败');
			  		this.openloading=false;
			  		console.log(error);
			  		
			  	})
		    },
		    //表单验证方法
		    checkform(){
		    	let isok=true
		    	if(this.username.length<5){
		    		this.usernameerrormsg='用户名不能小于5位';
		    		isok=false
		    	}else{
		    		this.usernameerrormsg='';
		    	}
		    	if(this.password.length<6){
		    		this.passworderroemsg='密码不能小于6位';
		    		isok=false
		    	}else{
		    		this.passworderroemsg='';
		    	}
		    	return isok
		    },
		    //注册
		    registeraction(){
		    	// if(this.checkform()){
		    	// 	this.login()
		    	// }
		    	this.checkform() && this.login()

		    }

		  }
	}
</script>