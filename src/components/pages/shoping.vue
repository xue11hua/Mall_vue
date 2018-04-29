<template>
	<div>
		<div class="search-bar">
			<van-row>
				<van-col span='3'>
					<img :src="locaicon" width="80%" alt="">
				</van-col>
				<van-col span='16'>
					<input class="search-input" type="text" placeholder="查找">
				</van-col>
				<van-col span='5'>
					<van-button size="mini" class="search-btn">查找</van-button>
				</van-col>
		    </van-row>
		</div>
		<!-- 轮播 -->
		<div class="swiper-div">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(itm,index) in banner" :key="index">
					<img v-lazy="itm.imgurl" alt="" width="100%">
				</van-swipe-item>
			</van-swipe>
		</div>
		
		
	</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'shoping',
  data () {
    return {
      a:'shoping',
      locaicon:require('../../assets/images/loca.png'),//引入图片
      banner:[
      {imgurl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
      {imgurl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
      {imgurl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'}
      ]
    }
  },
  created(){
  	axios({
  		url:'https://www.easy-mock.com/mock/5ae5293bb188f2152c952d77/smilevue/index',
  		method:'get',
  	})
  	.then(response=>{
  		console.log(response)
  	})
  	.catch(error=>{
  		console.log(error)
  	})
  }
}
</script>
<style scoped>
	.search-bar{
		
		background-color:#e5017d;
	}
	.search-input{
		width: 100%;
		height: .6rem;
		border: none;
		border-bottom: 1px solid #fff;
		background-color:#e5017d;
		color: #fff;
		text-indent: .2rem;
		font-size: .2rem;
		float: left;
		margin-top: .2rem;
		line-height: .6rem;
		

	}
	.search-btn{
		float: right;
		margin:.2rem .4rem 0 0;
		width: .8rem;
		height: .6rem;
		font-size: .2rem;
	}
	.swiper-div{
		max-height: 3.2rem;
		overflow: hidden;
	}


</style>