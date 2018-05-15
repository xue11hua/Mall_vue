<template>
	<div>
		<div class="floor-title">
			{{floortitle}}
		</div>
		<div class="floor">
		<!-- 不规则 -->
			<div class="floor-anomaly">
				<div class="floor-one">
					<img :src="floorData0.image" alt="" width="100%">
				</div>
				<div>
					<div class="floor-two">
						<img :src="floorData1.image" alt="" width="100%">
					</div>
					<div>
						<img :src="floorData2.image" alt="" width="100%">
					</div>
				</div>
			</div>
			<!-- 规则 -->
			<div class="floor-rule">
				<div v-for="(item,index) in floorData.slice(3)" :key="index">
					<img :src="item.image" alt="" width="100%">
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default{
		props:['floorData','floortitle'],//接收父组件数据
		data(){
			return {
				floorData0:{},
				floorData1:{},
				floorData2:{},

			}
		},
		created(){
			
		},
		watch:{//监听数据的变化
			floorData:function(val){
				console.log(this.floorData);
				this.floorData0=this.floorData[0];
				this.floorData1=this.floorData[1];
				this.floorData2=this.floorData[2];

			}
		}
	}
</script>
<style scoped>
	.floor-title{
		text-align: center;
		font-size:14px;
		height: 1rem;
		line-height: 1rem;
	}
	.floor-anomaly{
		display: flex;
		flex-direction: row;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}
	.floor-anomaly div{
		width:3.9rem;
		box-sizing:border-box;
	}
	.floor-one{
		
		border-right: 1px solid #ddd;
	}
	.floor-two{
		
		border-bottom: 1px solid #ddd;
	}
	.floor-rule{
		
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;

	}
	.floor-rule div{
		box-sizing:border-box;
		width: 50%;
		border-bottom: 1px solid #ddd;
		background: #fff;

	}
	.floor-rule div:nth-child(odd){
		border-right: 1px solid #ddd;
	}
</style>