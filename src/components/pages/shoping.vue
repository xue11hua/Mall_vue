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
					<img v-lazy="itm.image" alt="" width="100%">
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 导航 -->
		<div class="type-bar">
			<div v-for="(itm,index) in category" :key="index">
				<img v-lazy="itm.image" alt="" width="50%">
				<span>{{itm.mallCategoryName}}</span>
			</div>
		</div>
		<!-- 广告 -->
		<div class="gd">
			<img v-lazy="gdbanner" alt="" width="100%">
		</div>
		<!-- 商品推荐 -->
		<div class="recommend">
			<div class="recommend-title">
			商品推荐
			</div>
			<div class="recommend-body">
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item,index) in recommend" :key='index'>
						<div class="recommend-item">
							<img :src="item.image" alt="" width="80%">
							<div>{{item.goodsName}}</div>
							<div>￥{{item.price | moneyfilter}}(￥{{item.mallPrice | moneyfilter}})</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div> 
		<!-- 楼层 -->
		<!-- 传递数据到子组件 -->
		<floorcomponent :floorData='floor1' :floortitle='floorName.floor1'></floorcomponent>
		<floorcomponent :floorData='floor2' :floortitle='floorName.floor2'></floorcomponent>	
		<floorcomponent :floorData='floor3' :floortitle='floorName.floor3'></floorcomponent>		
		<!-- 热卖 -->
		<div class="hot">
			<div class="hot-title">
				热卖食品
			</div>
			<div class="hot-goods">
				<van-list>
					<van-row gutter='20'>
						<van-col span='12' v-for='(item,index) in hotgoods' :key='index'>
							<!-- <div>
								{{item.name}}
							</div> -->
							<goodlist :goodsImage='item.image' :goodsName='item.name' :goodsPrice='item.price'></goodlist>	
						</van-col>
					</van-row>
				</van-list>	
			</div>
		</div>
		
	</div>
</template>
<script>
import axios from 'axios'
//引入滑动组件
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import floorcomponent from '../component/floorcomponent'//引入组件
import goodlist from '../component/goodlist'//引入组件
import { tomoney } from '@/filter/moneyfilter.js'//引入filter
import url from '@/seversconfig.js'
export default {
  name: 'shoping',
  data () {
    return {
      swiperOption:{
      		slidesPerView:3
      },
      a:'shoping',
      locaicon:require('../../assets/images/loca.png'),//引入图片
      banner:[],
      category:[],
      gdbanner:'',
      recommend:[],
      floor1:[],
      floor2:[],
      floor3:[],
      floorName:[],
      hotgoods:[],//热卖商品

    }
  },
  filters:{//过滤器
  	moneyfilter(money){
  		return tomoney(money)
  	}
  },
  components:{//注册组件
  	swiper,
  	swiperSlide,
  	floorcomponent,
  	goodlist
  },
  created(){
  	axios({
  		url:url.getshopingmallinfo,
  		method:'get',
  	})
  	.then(response=>{
  		//console.log(response.data.data)
  		this.category=response.data.data.category;
  		this.gdbanner=response.data.data.advertesPicture.PICTURE_ADDRESS;
  		this.banner=response.data.data.slides;
  		this.recommend=response.data.data.recommend;
  		this.floor1=response.data.data.floor1;
  		this.floor2=response.data.data.floor2;
  		this.floor3=response.data.data.floor3;
  		this.floorName=response.data.data.floorName;
  		this.hotgoods=response.data.data.hotGoods;
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
	.type-bar{
		background-color: #fff;
		margin:.2rem .3rem .3rem .3rem;
		border-radius: .1rem;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		text-align: center;

	}
	.type-bar span{
		display: inline-block;
		width: 100%;
	}
	.type-bar div{
		padding: .1rem;

	}
	.recommend{
		background: #fff;
		margin-top: .4rem;
	}
	.recommend-title{
		border-bottom: 1px solid #eee;
		font-size: 14px;
		padding: .2rem;
		color: #e5017d;
	}
	.recommend-body{
		border-bottom: 1px solid #eee;
		font-size: 14px;
	}
	.recommend-item{
		width: 99%;
		border-right: 1px solid #eee;
		font-size: 12px;
		text-align: center;
	}
	.gd{
		height: .7rem;
	}
	.gd img{
		float: left;
	}
	/*热卖食品*/
	.hot-title{
		text-align: center;
		font-size:14px;
		height: 1rem;
		line-height: 1rem;
	}
	.hot-goods{
		background: #fff;
	}
</style>