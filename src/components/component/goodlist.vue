<template>
	<div class="good-info">
		<div class="good-img">
			<img v-lazy="goodsImage" alt="" width="90%">
		</div>
		<div class="good-name">{{goodsName}}</div>
		<div class="good-price">{{goodsPrice | moneyfilter}}</div>
	</div>
</template>
<script>
	import { tomoney } from '@/filter/moneyfilter.js'//引入filter
	export default {
		props:['goodsImage','goodsName','goodsPrice'],
		filters:{//过滤器
		  	moneyfilter(money){
		  		return tomoney(money)
		  	}
  		},
	}
</script>
<style scoped>
	.good-info{
		width: 100%;
		text-align: center;
		font-size: .2rem;
		background: #fff;
	}
	
</style>